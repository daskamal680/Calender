var year = document.getElementById("year");
var month = document.getElementById("month");
var previousYear = document.getElementById("previousYear");
var previousMonth = document.getElementById("previousMonth");
var nextYear = document.getElementById("nextYear");
var nextMonth = document.getElementById("nextMonth");
var currentYear = 2019;
var months = [["January",31] , ["February",28], ["March", 31], ["April", 30], ["May", 31], ["June", 30], ["July", 31], ["August", 31], ["September", 30], ["Octobor",31], ["November",30], ["December", 31]];
var currentMonth = months[2][0];
var currentMonthLength = months[2][1];
var days = ["Monday", "Tuesday", "wednesday", "Thursday", "Friday", "saturday", "Sunday"];

var endDayOfMonth;	
var startDayOfMonth;	

function changeTable(startingDayOfMonth,lengthOfMonth){
	startDayOfMonth = startingDayOfMonth;
	var table = document.getElementsByTagName("table")[0];
	var toogle = 0;
	var count = 1;
	for(i=0;i<6;i++){
		var row = table.getElementsByTagName("tr")[i+1];
		for(j=0;j<7;j++){	
			if((toogle==0) &&(j!=startingDayOfMonth)){
				var column = row.getElementsByTagName("td")[j];
				column.innerHTML = null;
			}
			if(count>lengthOfMonth){
				var column = row.getElementsByTagName("td")[j];
				column.innerHTML = null;
			}
			if((toogle == 1) && (count<=lengthOfMonth)){
				var column = row.getElementsByTagName("td")[j];
				column.innerHTML = count;
				count++;
				endDayOfMonth = j;	
			}
			if((toogle==0) && (j==startingDayOfMonth)){
				toogle=1;
				var column = row.getElementsByTagName("td")[j];
				column.innerHTML = count;
				count++;
				
			}
		}
	}	
}


changeTable(4,31);

year.innerHTML = currentYear;
month.innerHTML = currentMonth;

previousYear.addEventListener("click", function(){
	if(currentYear%4 == 0){
		if((currentMonth != months[0][0]) && (currentMonth != months[1][0])){
			if(startDayOfMonth != 0){
				startDayOfMonth--;
			}
			else{
				startDayOfMonth = 6;
			}
		}
	}
	currentYear--;
	year.innerHTML = currentYear;
	if(currentYear%4 == 0){
		months[1][1] = 29;
		if(currentMonth == months[1][0]){
			currentMonthLength = 29;
		}
		if((currentMonth == months[0][0]) || (currentMonth == months[1][0])){
			if(startDayOfMonth != 0){
				startDayOfMonth--;
			}
			else{
				startDayOfMonth = 6;
			}
		}
	}
	else{
		months[1][1] = 28;
		if(currentMonth == months[1][0]){
			currentMonthLength = 28;
		}
	}
	if(startDayOfMonth != 0){
		startDayOfMonth--;
	}
	else{
		startDayOfMonth = 6;
	}
	changeTable(startDayOfMonth, currentMonthLength);
});

nextYear.addEventListener("click", function(){	
	if(currentYear%4 ==0){
		if((currentMonth ==months[0][0]) || (currentMonth ==months[1][0])){
			startDayOfMonth++;
			startDayOfMonth = startDayOfMonth%7;
		}
	}
	currentYear++;
	year.innerHTML = currentYear;
	if(currentYear%4 == 0){
		months[1][1] = 29;
		if(currentMonth == months[1][0]){
			currentMonthLength = 29;
		}
		if((currentMonth != months[0][0]) && (currentMonth != months[1][0])){
			startDayOfMonth++;
			startDayOfMonth = startDayOfMonth%7;
		}
	}
	else{
		months[1][1] = 28;
		if(currentMonth == months[1][0]){
			currentMonthLength = 28;
		}
	}
	startDayOfMonth++;
	startDayOfMonth = startDayOfMonth%7;
	changeTable(startDayOfMonth, currentMonthLength);
});


previousMonth.addEventListener("click" , function() {
	for(i=0;i<12; i++){
		if(currentMonth==months[i][0]){
			if (currentMonth == months[0][0]){
				currentMonth=months[11][0];
				currentMonthLength = months[11][1];
				month.innerHTML = currentMonth;
				currentYear--;
				year.innerHTML = currentYear;
				if(currentYear%4 == 0){
					months[1][1] = 29;
				}
				if(currentYear%4 !=0){
					months[1][1] = 28;
				}
				if (startDayOfMonth == 0) {
					endDayOfMonth = 6;
					startDayOfMonth = (7 - (currentMonthLength % 7))%7 ;
					//alert("startDayOfMonth = " + startDayOfMonth + "currentMonthLength =" + currentMonthLength);
					changeTable(startDayOfMonth,currentMonthLength);
				}
				else{
					endDayOfMonth = startDayOfMonth - 1;
					startDayOfMonth = (7 - ((currentMonthLength - endDayOfMonth - 1)% 7))%7;
					//alert("startDayOfMonth = " + startDayOfMonth + "currentMonthLength =" + currentMonthLength);
					changeTable(startDayOfMonth,currentMonthLength);
				}
				break;
			}
			else{
				currentMonth=months[i-1][0];
				currentMonthLength = months[i-1][1];
				month.innerHTML = currentMonth;
				if (startDayOfMonth == 0) {
					endDayOfMonth = 6;
					startDayOfMonth = (7 - (currentMonthLength % 7))%7 ;
					//alert("startDayOfMonth = " + startDayOfMonth + "currentMonthLength =" + currentMonthLength);
					changeTable(startDayOfMonth,currentMonthLength);
				}
				else{
					endDayOfMonth = startDayOfMonth - 1;
					startDayOfMonth = (7 - ((currentMonthLength - endDayOfMonth - 1)% 7))%7;
					//alert("startDayOfMonth = " + startDayOfMonth + "currentMonthLength =" + currentMonthLength);
					changeTable(startDayOfMonth,currentMonthLength);
				}
				break;
			}
		}
	}
});

nextMonth.addEventListener("click",function(){
	for(i=0;i<12; i++){	
		if(currentMonth==months[i][0]){
			if (currentMonth == months[11][0]){
				currentMonth = months[0][0];
				currentMonthLength = months[0][1];
				month.innerHTML = currentMonth;
				currentYear++;
				year.innerHTML = currentYear;	
				if(currentYear%4 == 0){
					months[1][1] = 29;
				}
				if(currentYear%4 != 0){
					months[1][1] = 28;
				}
				if(endDayOfMonth == 6){
					changeTable(0,currentMonthLength);
				}
				else{
					changeTable(endDayOfMonth+1,currentMonthLength);
				}
							
				break;
			}
			else{
				currentMonth = months[i+1][0];
				currentMonthLength = months[i+1][1];
				month.innerHTML = currentMonth;
				if(endDayOfMonth == 6){
					changeTable(0,currentMonthLength);
				}
				else{
					changeTable(endDayOfMonth+1,currentMonthLength);
				}
				break;
			}
		}
	}
});


