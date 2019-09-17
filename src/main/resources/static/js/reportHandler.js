function submitToFlow() {
	
	var form = document.getElementById("flowForm");
	
	var data = {};
	
	if (document.getElementById("email").checked) {
		data["\"email\""] = true;
	} else {
		data["\"email\""] = false;
	}
	
	if (document.getElementById("st").checked) {
		data["\"st\""] = true;
	} else {
		data["\"st\""] = false;
	}
	
	if (document.getElementById("syncP").checked) {
		data["\"syncP\""] = true;
	} else {
		data["\"syncP\""] = false;
	}
	
	if (document.getElementById("orders").checked) {
		data["\"orders\""] = true;
	} else {
		data["\"orders\""] = false;
	}
	
	if (document.getElementById("contacts").checked) {
		data["\"contacts\""] = true;
	} else {
		data["\"contacts\""] = false;
	}
	
	if (document.getElementById("incidents").checked) {
		data["\"incidents\""] = true;
	} else {
		data["\"incidents\""] = false;
	}
	
	data["\"incidents\""] = true;
	
	/*
	  for (var i = 0, ii = form.length; i < ii; ++i) {
	    var input = form[i];
	    if (input.name) {
	    	if (input.value == "on") {
	    		
	    	} else {
	    		data[input.name] = input.value;
	    	}
	    }
	  }
	  
	  */
	  
	  alert(data);
	
/*	
	var xhr = new XMLHttpRequest();
	  xhr.open(form.method, form.action, true);
	  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

	  // send the collected data as JSON
	  xhr.send(JSON.stringify(data));
	  */
}


