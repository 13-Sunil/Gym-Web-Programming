function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal : <span>${bmi}</span>`;

		else result.innerHTML =
			`Over Weight : <span>${bmi}</span>`;
	    }
    }

	// login form
	var x = document.getElementById("login");
	var y = document.getElementById("signup");
	var z = document.getElementById("btn");
	function signup(){
		x.style.left = "-400px";
		y.style.left = "50px";
		z.style.left = "110px";
	}
	function login(){
		x.style.left = "50px";
		y.style.left = "450px";
		z.style.left = "0 ";
	}

	// Login Form Validation

	function validate(){
		var firstname = document.getElementById("fname").value;
		var lastname = document.getElementById("lname").value;
		var pasword = document.getElementById("pass").value;
		var cpasword = document.getElementById("cpass").value;
		// input field is empty or not
		if(firstname == ""){
		document.getElementById("fn").innerHTML = "Please Enter Your Name";
		return false;
		}
		if(!isNaN(firstname)){
		document.getElementById("fn").innerHTML = "Please Enter Characters only";
		return false;
		}
		if(lastname == ""){
			document.getElementById("ln").innerHTML = "Please Enter Your Name";
			return false;
			}
			if(!isNaN(lastname)){
			document.getElementById("ln").innerHTML = "Please Enter Characters only";
			return false;
			}
		if(pasword == ""){
		document.getElementById("ps").innerHTML = "Please Enter Your Password";
		return false;
		}
		var pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		if(pass.test(password)){
		document.getElementById('ps').innerHTML = "";
		}else{
		document.getElementById('ps').innerHTML = "Please enter Minimum 8 characters at least 1 Alphabet and 1 Number";
		return false;
		}
		if((pasword.length < 1) ||(pasword.length > 12)){
		document.getElementById("ps").innerHTML = "Please Enter Your Password between 6 to 12 characters";
		return false;
		}
		if(cpasword == ""){
		document.getElementById("cps").innerHTML = "Please Enter Your Confirm Password";
		return false;
		}
		if((cpasword.length < 1) ||(cpasword.length > 12)){
		document.getElementById("cps").innerHTML = "Please	Enter Your Password between 1 to 12 characters";
		return false;
		}
		if(pasword !== cpasword){
		document.getElementById("cps").innerHTML = "password is not matched with confirm password.";
		return false;
		}
 }
		//  	menu items
	var MenuItems = document.getElementById("MenuItems");
	MenuItems.style.maxHeight = "0px";
	function menutoggle() {
	  if (MenuItems.style.maxHeight == "0px") {
		MenuItems.style.maxHeight = "200px";
	  } else {
		MenuItems.style.maxHeight = "0px";
	  }
	}
