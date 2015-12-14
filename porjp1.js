var array = [];

$(document).ready(function(){
	$("#employeeinfo").on('submit',function(event){
		event.preventDefault();

		var values = {};

		$.each($("#employeeinfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		});
		
		$("#employeeinfo").find("input[type=text]").val("");
		$('#employeeinfo').find('input[type=number]').val('');
		console.log(values);
		appendDom(values);


		var allSalaries = 0;
		var getMonthlySalaries = function(param){
			for (i = 0; i < array.length; i++) {
				allSalaries += (array[i].employeeyearlysalary)/12;
			}
			return allSalaries;
		};
		array.push(values);
		console.log(array);
		console.log(getMonthlySalaries());

	//$('.results').on('click', '.deleteBtn', function()){
			//$(this).parents('results').remove();
		});	
});



function appendDom(object){
	$("#container").append("<div class = 'results'></div>");
	var $el = $("#container").children().last();


	$el.append("<p>" + object.employeefirstname + "</p>");
	$el.append("<p>" + object.employeelastname + "</p>");
	$el.append("<p>" + object.employeeidnumber + "</p>");
	$el.append('<p>' + object.employeejobtitle + '</p>');
	$el.append('<p>' + object.employeeyearlysalary + '</p>');
}
	//$el.append('<button class = 'deleteBtn'>Remove</button');
	
