<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
     <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<c:url value="/css/reportHandler.css" var="viewerCss" />
		<link href="${viewerCss}" rel="stylesheet" />
		<c:url value="/css/jquery-ui.css" var="jqueryCss" />
		<link href="${jqueryCss}" rel="stylesheet" />
		<title>Axway Report Generator</title>
</head>
<body>
<script src="js/jQuery-3.4.1.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/reportHandler.js"></script>

	<div class="header">
	    <table>
	    	<tr>
	    		<td align="left">
	    			<img src="/images/ReportGen.PNG" alt="Axway Report logo" width="450" height="100">
	    		</td>
	    	</tr>
	    </table>
 	</div>
 	
 	<body>
    	<br/>
    	<br/>
    	<br/>
    	<form id="flowForm">
	    	<table>
			  <tr><td><h2>What do you want to send? (Select one or more)</h2></td></tr>
			</table>
			  <table id="sourceTbl" class="selectionTable">
			  <tr>
			  		<td>ORDERS (PostgreSQL)</td><td><input type="checkbox" id="orders" checked="checked"/></td>
			  		<td>CONTACTS (Salesforce)</td><td><input type="checkbox"  id="contacts" checked="checked"/></td>
			  		<td>INCIDENTS (ServiceNow)</td><td><input type="checkbox" id="incidents" checked="checked"/></td>
			  </tr>
			  <tr>
			  		<td>Report Name: <input type="text" id="reportNameTxt" value="axwayReport"></td><td></td>
			  </tr>
			</table>
			<br/>
			<br/>
			<table>
			  <tr><td><h2>Where do you want to send it? (Select one or more)</h2></td></tr>
			  </table>
			  <table id="destTbl" class="selectionTable">
			  <tr>
			  		<td>EMAIL (Outlook)<td><input type="checkbox" id="email" checked="checked"/></td>
			  		<td>SHARED FOLDER (Syncplicity)</td><td><input type="checkbox" id="syncP" checked="checked"/></td>
			  		<td>FOLDER (Secure Transport)</td><td><input type="checkbox" id="st" checked="checked"/></td></tr>
			  <tr>
			  		<td>Email Address:  <input type="text" id="emailAddrTxt" value="jmcaleer@axway.com"></td><td></td>
			  		<td>Target Folder:  <select id="syncPSelect" name="syncpFolder"><option id="selExternal" value="external">external</option><option id="selInternal" value="internal">internal</option></select></td><td></<td><td>ST Folder: <input type="text" id="stTargetFolder" value="toSend"></td>
			  </tr>
			  <tr>
			  	<td></td><td></td><td>Send Email Link?</td><td><input type="checkbox" id="sendSyncpLink" checked="checked"/></td><td></td><td></td>
			  </tr>
			  <tr>
			  	<td></td><td></td><td>Syncp Email:  <input type="text" id="emailAddrSyncPTxt" value="jmcaleer@axway.com"></td><td></td><td></td><td></td>
			  </tr>
			<tr><td><input id="btnSubmit" type="button" name="Submit" value="Submit" class="button" onclick="submitToFlow()"></td></tr>
			</table>
		</form>
	</body>
 	
</html>