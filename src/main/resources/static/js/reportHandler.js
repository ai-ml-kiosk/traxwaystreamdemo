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
	
	data["\"syncpFolder\""] = document.getElementById("syncPSelect").value;
	
	data["\"emailAddrTxt\""] = document.getElementById("emailAddrTxt").value;
	
	var xhr = new XMLHttpRequest();
	  xhr.open("POST", "https://test-e4e6d0cc6b9ae2c3016b9c0332cb0161.apicentral.axwayamplify.com/ReportGenerator_sandbox_flow_400727-/executions" , true);
	  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

	  // send the collected data as JSON
	  xhr.send(JSON.stringify(data));
	  
}


