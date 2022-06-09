// JavaScript Document
	var strErrMsg;
							
		function validate_form()
			{
				strErrMsg = '<h4>Errors found: </h4>' +  '<ul>' + strErrMsg + '</ul>';
				notEmpty(document.getElementById('fname'), 'Enter first name');
				invalidLength(document.getElementById('lname'), 'Enter last name');
				notChecked(document.getElementById('gender'), 'Select gender');
				invalidLength(document.getElementById('email'), 'Enter valid email');
				invalidNumber1(document.getElementById('area'), 'Enter area code');
				invalidNumber1(document.getElementById('exchange'), 'Enter exchange');
				invalidNumber2(document.getElementById('phone-number'), 'Enter number');
							
				if(strErrMsg == "") {		
				var err=document.getElementById('errors'); err.innerHTML=strErrMsg;
				err.style.visibility="hidden";
					return false;
				}
							
					err=document.getElementById('errors'); err.innerHTML = strErrMsg;
					err.style.visibility="visible";
					strErrMsg = "";
					return false;

			}
							
			function notEmpty(elem, helperMsg) {
				elem.style.backgroundColor="white";
				if(elem.value == "")
				{ 
					strErrMsg = strErrMsg + '<li>' + helperMsg + '</li>' + "\n";
					elem.style.backgroundColor="#fcc";
				}
			}
							
			function invalidLength(elem, helperMsg) {
				elem.style.backgroundColor="white";
				if(elem.value.length < 1)
				{
					strErrMsg = strErrMsg + '<li>' + helperMsg + '</li>' + "\n";
					elem.style.backgroundColor="#fcc";
				}
			}
			function invalidZip(elem, helperMsg) {
				elem.style.backgroundColor="white";
				if(elem.value.length < 5)
				{
					strErrMsg = strErrMsg + '<li>' + helperMsg + '</li>' + "\n";
					elem.style.backgroundColor="#fcc";
				}
			}
			function notChecked(elem, helperMsg) {
				if(!document.getElementById('male').checked && !document.getElementById('female').checked)
				{
					strErrMsg = strErrMsg + '<li>' + helperMsg + '</li>' + "\n";
				}
			}
			
			function invalidNumber1(elem, helperMsg) {
				elem.style.backgroundColor="white";
				if(elem.value.length < 3)
				{
					strErrMsg = strErrMsg + '<li>' + helperMsg + '</li>' + "\n";
					elem.style.backgroundColor="#fcc";
				}
			}

			function invalidNumber2(elem, helperMsg) {
				elem.style.backgroundColor="white";
				if(elem.value.length < 4)
				{
					strErrMsg = strErrMsg + '<li>' + helperMsg + '</li>' + "\n";
					elem.style.backgroundColor="#fcc";
				}
			}