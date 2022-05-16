function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

$('#verify_otp_model').hide()
$('#errorbox').hide()


    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('getotp', {
      'size': 'invisible',
      'callback': function(response) {

        
      }
    });

  recaptchaVerifier.render().then(function(widgetId) {
      window.recaptchaWidgetId = widgetId;

    });

  var ID_phone_no = {
  	"800000000000": "6692262857",
  	"300000000000": "4158378949",
	"<replace your id number here>": "<your phone number>",
  }


  function onSignInSubmit() {
    window.signingIn = true;
    $('#errorbox').hide();

    var phoneNumber = "+1" + ID_phone_no[$('#id_no').val()];

      var d = new Date();
      d.setTime(d.getTime() + (1*24*60*60*1000));      
      var expires = "expires="+ d.toUTCString();
      document.cookie = 'id' + "=" + $('#id_no').val() + ";" + expires + ";path=/";

    $('#verifyc').text('Enter verification code send to '+phoneNumber)
     var appVerifier = window.recaptchaVerifier;
     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then(function (confirmationResult) {
            
            window.confirmationResult = confirmationResult;
            window.signingIn = false;

            $('#enter_id_no').hide()
            $('#verify_otp_model').show()
            console.log('otp');
            
          }).catch(function (error) {
            
            window.alert('error\n\n'+error);
            window.signingIn = false;
       
            $('.verification-code-form').hide()
          });
  }

$(verifyotp).click(function(){
		var code = $('#verify_otp').val()
      	confirmationResult.confirm(code).then(function (result) {
       
        var user = result.user;
        window.verifyingCode = false;

        console.log(user.uid);
        var d = new Date();
    	d.setTime(d.getTime() + (1*24*60*60*1000));      
    	var expires = "expires="+ d.toUTCString();
    	document.cookie = 'show' + "=" + user.uid + ";" + expires + ";path=/";
    	window.location = '/info'

      }).catch(function (error) {

        console.error('Error while checking the verification code', error);
        window.alert('Error while checking the verification code:\n\n'
           + error.code + '\n\n' + error.message);
        window.verifyingCode = false;
        $('#errorbox').show()
		$('#error').text('Enter valid OTP')
      });
});


$(getotp).click(function(){
	if ($('#id_no').val()=="") {
		$('#errorbox').show()
		$('#error').text('Please Enter ID Number')

    }
    else{
    	onSignInSubmit();
    	$('#errorbox').hide()
    }
});
