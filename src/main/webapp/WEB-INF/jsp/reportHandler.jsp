<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
     <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<c:url value="/css/viewer.css" var="viewerCss" />
		<link href="${viewerCss}" rel="stylesheet" />
		<c:url value="/css/jquery-ui.css" var="jqueryCss" />
		<link href="${jqueryCss}" rel="stylesheet" />
		<title>TRAXWAY STREAM DEMO</title>
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
			  <tr><td><img src="/images/PostgresLogo.PNG" alt="Postgres logo"  width="390" height="90"></td><td><input type="checkbox" id="orders"/></td>
			  		<td><img src="/images/SFLogo.PNG" alt="SalesForce logo" width="390" height="90"></td><td><input type="checkbox"  id="contacts"/></td>
			  		<td><img src="/images/SNLogo.PNG" alt="ServiceNow logo" width="390" height="90"></td><td><input type="checkbox" id="incidents"/></td></tr>
			</table>
			<table>
			  <tr><td><h2>Where do you want to send it? (Select one or more)</h2></td></tr>
			  <tr><td><img src="/images/EmailLogo.PNG" alt="Outlook logo" width="390" height="90"></td><td><input type="checkbox" id="email"/></td>
			  <td><img src="/images/SyncPLogo.PNG" alt="SyncP logo" width="390" height="90"></td><td><input type="checkbox" id="syncP"/></td>
			  <td><img src="/images/STLogo.PNG" alt="ST logo" width="390" height="90"></td><td><input type="checkbox" id="st"/></td></tr>
	
			  <tr><td>Address:<input type="text" id="emailAddrTxt" name=""></td><td></<td><select id="syncPSelect" name="syncpFolder"><option id="selExternal" value="external">external</option><option id="selInternal" value="internal">internal</option></select></td><td></<td><td></td></tr>
				<tr><td><input id="btnSubmit" type="button" name="Submit" value="Submit" onclick="submitToFlow()"></td></tr>
			</table>
		</form>
	</body>
 	
</html>