//start Horse prices stream
var eventSource = null;
		 var prices = [];
	(function() {
		
		  function connect() {
		    // REPLACE WITH YOUR OWN TOKEN HERE
		    var appToken = "MTJjNTFiYWYtYTQ1Yi00MGJhLTkwMjctYTMyOWMxZGE0NDEw";

		    // create the StreamdataEventSource Object
		    eventSource = streamdataio.createEventSource("http://istio.dev.axway-aus.de/api/springdemo2/horseprices", appToken);

		    eventSource
		     .onOpen(function() {
		       console.log("streamdata Event Source connected.")
		     })
		     .onData(function(data) {
		       // json object stored locally.
		       prices = data;
		       console.log("DATA RECEVIED:  " + JSON.stringify(data))
		      // document.getElementById("result").innerHTML += JSON.stringify(stocks) + "</BR>";
		       processInitialPriceData(prices);
		     })
		     .onPatch(function(patch) {
		       // use json patch library to apply the patch (patch)
		       // to the original snapshot (stocks)
		       jsonpatch.apply(prices, patch);
		       console.log("PATCH RECEVIED:  " + JSON.stringify(patch))
		       //document.getElementById("result").innerHTML += JSON.stringify(stocks) + "</BR>";;
		       processPricePatchData(prices);
		     })
		     .onError(function(error) {
		       // displays the error message
		       console.log(error.getMessage());
		     });

		    // open the data stream to the REST service through streamdata.io proxy
		    eventSource.open();

		  };

		  function disconnect() {
		    if (eventSource) {
		      eventSource.close();
		      eventSource = null;
		    }
		  };

		  connect();
	})();
	
	var eventSourceRace = null;
	 var positions = [];
	function startRaceStream() {
		disconnectPriceStream();
			  function connect() {
			    // REPLACE WITH YOUR OWN TOKEN HERE
			    var appToken = "MTJjNTFiYWYtYTQ1Yi00MGJhLTkwMjctYTMyOWMxZGE0NDEw";

			    // create the StreamdataEventSource Object
			    eventSourceRace = streamdataio.createEventSource("http://istio.dev.axway-aus.de/api/springdemo2/horserace", appToken);

			    eventSourceRace
			     .onOpen(function() {
			       console.log("race streamdata Event Source connected.")
			     })
			     .onData(function(data) {
			       // json object stored locally.
			    	positions = data;
			       console.log("RACE DATA RECEVIED:  " + JSON.stringify(data))
			      // document.getElementById("result").innerHTML += JSON.stringify(stocks) + "</BR>";
			       CreateRaceTableFromJSON(positions);
			     })
			     .onPatch(function(patch) {
			       // use json patch library to apply the patch (patch)
			       // to the original snapshot (stocks)
			       jsonpatch.apply(positions, patch);
			       console.log("RACE PATCH RECEVIED:  " + JSON.stringify(patch))
			       //document.getElementById("result").innerHTML += JSON.stringify(stocks) + "</BR>";;
			       processRacePatchData(positions);
			     })
			     .onError(function(error) {
			       // displays the error message
			       console.log(error.getMessage());
			     });

			    // open the data stream to the REST service through streamdata.io proxy
			    eventSourceRace.open();

			  };

			  function disconnect() {
			    if (eventSourceRace) {
			    	eventSourceRace.close();
			    	eventSourceRace = null;
			    }
			  };

			  connect();
	}

//stop price stream
function disconnectPriceStream() {
    if (eventSource) {
      eventSource.close();
      eventSource = null;
    }
  };
  
  //process price patches
  function processPricePatchData(data) {
	  
	  for (var i = 0; i < data.length; i++){
		 
		var cellToUpdate = document.getElementById("horsePrice" + data[i].number);
		var originalValue = cellToUpdate.innerHTML;
		
		cellToUpdate.innerHTML = data[i].price;
		
		if (data[i].price > originalValue) {
			cellToUpdate.style.color = "#80ff00";
		}
		else if (data[i].price < originalValue) {
			cellToUpdate.style.color = "#ff0000";
		} else {
			cellToUpdate.style.color = "#000000";
		}
		
	  }
  }
  
 function processRacePatchData(data) {
	  
	 var existingTable = document.getElementById("raceTable");
	 var tr = existingTable.insertRow(-1); 
	 
	  for (var i = 0; i < data.length; i++){
		  var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = data[i].number;
	  }
	  
	  //update results table for first 4
	  for (var t = 1; t <= 4; t++) {
		  document.getElementById("horse" + t).innerHTML = data[t-1].number;
	  }
  }
  
  function processInitialPriceData(data) {
	  CreateTableFromJSON(data);
  }
  
  
  function CreateTableFromJSON(data) {
	  
	  //if table exists - remove it
	  var existingTable = document.getElementById("resultsTable");
	  if (existingTable) {
	  	existingTable.parentNode.removeChild(existingTable);
	  }
	  
      // EXTRACT VALUE FOR HTML HEADER. 
      var col = ["Number", "Name", "Jockey", "Win"];
     

      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");
      table.id = "resultsTable";

      // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

      var tr = table.insertRow(-1);                   // TABLE ROW.

      for (var i = 0; i < col.length; i++) {
          var th = document.createElement("th");      // TABLE HEADER.
          th.innerHTML = col[i];
          tr.appendChild(th);
      }
      
      var cellId = "horsePrice";
      // ADD JSON DATA TO THE TABLE AS ROWS.
      for (var i = 0; i < data.length; i++) {

          tr = table.insertRow(-1);
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = data[i].number;
          tabCell = tr.insertCell(-1);
          tabCell.innerHTML = data[i].name;
          tabCell = tr.insertCell(-1);
          tabCell.innerHTML = data[i].jockey;
          tabCell = tr.insertCell(-1);
          tabCell.innerHTML = data[i].price;
          tabCell.id = cellId + data[i].number;
      }

      
      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("showData");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
  }
  
  
function CreateRaceTableFromJSON(data) {
	  
	  //if table exists - remove it
	  var existingTable = document.getElementById("raceTable");
	  if (existingTable) {
	  	existingTable.parentNode.removeChild(existingTable);
	  }
	  
	  var col = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th"];
	  
      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");
      table.id = "raceTable";
      
      var tr = table.insertRow(-1);                   // TABLE ROW.

      for (var i = 0; i < col.length; i++) {
          var th = document.createElement("th");      // TABLE HEADER.
          th.innerHTML = col[i];
          tr.appendChild(th);
      }

      tr = table.insertRow(-1); 

      // ADD JSON DATA TO THE TABLE AS ROWS.
      for (var i = 0; i < data.length; i++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = data[i].number;
      }

      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("raceData");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
  }

function doReset() {
    var win = window.open('http://istio.dev.axway-aus.de/api/springdemo2/horseReset', '_blank');
    window.location.reload(false);
}
