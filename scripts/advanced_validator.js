// JavaScript Document
	var strErrMsg = "";

	var fName = document.getElementById("fname");
	var lName = document.getElementById("lname");
	var email = document.getElementById("email");
	var areaCode = document.getElementById("area");
	var exchange = document.getElementById("exchange");
	var phoneNumber = document.getElementById("phone-number");
	var message = document.getElementById("message");

	var data = new FormData(document.getElementById("validation"));
							
		function validate_form()
			{
				notEmpty(fName, 'Enter first name');
				invalidLength(lName, 'Enter last name');
				invalidLength(email, 'Enter valid email');
				invalidNumber1(areaCode, 'Enter area code');
				invalidNumber1(exchange, 'Enter exchange');
				invalidNumber2(phoneNumber, 'Enter number');
				if(strErrMsg != "")
					{
					strErrMsg = '<h4>Errors found: </h4>' +  '<ul>' + strErrMsg + '</ul>';
					}
					else{
						fetch('../scripts/sendMail.php', {method: 'POST'})
							.then(response => response.text())
							.then(data => {
								console.log(data);
							})
							.catch(error => {
								console.error('Error:', error);
							});
							console.log("Done");
						fName.value = "";
						lName.value = "";
						email.value = "";
						areaCode.value = "";
						exchange.value = "";
						phoneNumber.value = "";
						message.value = "";
					}
							
				if(strErrMsg == "") {		
				var err=document.getElementById('errors');
				err.innerHTML=strErrMsg;
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