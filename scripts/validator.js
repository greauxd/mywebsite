// JavaScript Document
	var strErrMsg;
							
		function validate_form()
			{
				strErrMsg = "";
				notEmpty(document.getElementById('fname'), 'Enter first name');
				invalidLength(document.getElementById('lname'), 'Enter last name');
				notChecked(document.getElementById('gender'), 'Select gender');
				invalidLength(document.getElementById('number'), 'Enter house number');
				invalidLength(document.getElementById('street'), 'Enter street');
				invalidLength(document.getElementById('city'), 'Enter city');
				notEmpty(document.getElementById('state'), 'Select a state');
				invalidZip(document.getElementById('zip'), 'Enter zip');
				invalidNumber1(document.getElementById('area'), 'Enter area code');
				invalidNumber1(document.getElementById('exchange'), 'Enter exchange');
				invalidNumber2(document.getElementById('phone-number'), 'Enter number');
							
				if(strErrMsg == "") {
								
				alert('Form ready to submit');
					return false;
				}
							
			alert('Errors Encountered: \n' + strErrMsg);
				return false;
						}
							
			function notEmpty(elem, helperMsg) {
				if(elem.value == "")strErrMsg = strErrMsg + helperMsg + "\n";
			}
							
			function invalidLength(elem, helperMsg) {
				if(elem.value.length < 1)strErrMsg = strErrMsg + helperMsg + "\n";
			}
			function invalidZip(elem, helperMsg) {
				if(elem.value.length < 5)strErrMsg = strErrMsg + helperMsg + "\n";
			}
			function notChecked(elem, helperMsg) {
				if(!document.getElementById('male').checked && !document.getElementById('female').checked)strErrMsg = strErrMsg + helperMsg + "\n";
							
			}
			
			function invalidNumber1(elem, helperMsg) {
				if(elem.value.length < 3)strErrMsg = strErrMsg + helperMsg + "\n";
			}

			function invalidNumber2(elem, helperMsg) {
				if(elem.value.length < 4)strErrMsg = strErrMsg + helperMsg + "\n";
			}