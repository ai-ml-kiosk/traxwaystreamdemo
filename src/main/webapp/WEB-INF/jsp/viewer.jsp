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
<script src="js/streamdataio.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fast-json-patch/0.5.1/json-patch-duplex.min.js"></script>
<script src="js/viewer.js"></script>

	<div class="header">
	    <table>
	    	<tr>
	    		<td align="left">
	    			<img src="/images/Traxway.PNG" alt="Traxway logo" width="300" height="80">
	    		</td>
	    	</tr>
	    </table>
 	</div>
 	
 	<body>
    	<br/>
    	<br/>
    	<br/>
    	<table>
		   	<tr>
		   		<td id="priceSection" style="vertical-align:top;padding-left: 50px">
			    	<table>
			    		<tr><td id="horseListHeader"><img src="/images/trophy.jpg" alt="Trophy" width="30" height="40">  TRAXWAY CHAMPIONS CUP 1000m</td>
			    		</tr>
			    		<tr>
				    		<td>
				    			<div id="showData"></div>
				    		</td>
				    	</tr>
			    	</table>
			    </td>
			    <td></td>
			    <td id="placingTableSection"  style="vertical-align:top;padding-left: 50px">
			    	<table>
			    		<tr>
			    			<td>
								<table id="tblPlacings">
									<tr><td colspan="4" id="hdrPlacings">Placings</td></tr>
									<tr>
										<td class="placeNum">1st       </td><td class="placeNum">2nd      </td><td class="placeNum">3rd      </td><td class="placeNum">4th      </td>
									</tr>
									<tr>
										<td class="placer" id="horse1"></td><td class="placer" id="horse2"></td><td class="placer" id="horse3"></td><td class="placer" id="horse4"></td>
									</tr>
								</table>			    				
			    			</td>
			    		</tr>
			    	</table>
			    	<td id="raceDataSection" style="vertical-align:top;padding-left: 50px">
			    	<table>
			    		<tr>
			    			<td id="horseRaceHeader">RACE DATA</td><td><input type="button" class="button" name="Start Race" value="Start Race" onclick="startRaceStream()">     <input type="button" class="button" name="reset Race" value="Reset Race" onclick="doReset()"></td>
			    		</tr>
			    		<tr>
			    			<td>
			    				<div id="raceData"></div>
			    			</td>
			    		</tr>
			    	</table>
			    </td>
			 </tr>
		</table> <!-- end page table -->
	</body>
 	
</html>