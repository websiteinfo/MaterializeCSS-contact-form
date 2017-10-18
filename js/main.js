$( document ).ready(function() {
 	$("#ajaxform").submit(function(e){
		var contactdata  =  $(this).serializeArray();
		var submiturl    =  $(this).attr('action');
		var submitbtn 	 =  $('#submit');
		submitbtn.val('Sending...');
		$("#ajaxform :input").prop("disabled", true);
		    $.ajax({
		        url: submiturl,
		        type: 'POST',
		        dataType: "json",
	 			data : contactdata,
		        success: function(response){
		           $('#alert').removeClass('alert alert-success');
		           $('#alert').removeClass('alert alert-danger');
		           if(response.status=="true"){
		           	$('#alert').addClass('alert alert-success');
		           	$("#ajaxform :input").prop("disabled", false);
		           	$('#ajaxform')[0].reset();
		           	submitbtn.val('Send');
		           }else{
		           	$("#alert").addClass('alert alert-danger');
		           	$("#ajaxform :input").prop("disabled", false);
		           	submitbtn.val('Send');
		           }
		           $('#alert').html(response.message).slideDown();
		        }
		    });
		e.preventDefault();	
	}); 
}); 