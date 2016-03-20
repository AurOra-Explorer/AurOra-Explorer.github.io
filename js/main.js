
function askQuestions() {

		var firstName = prompt('What is your first name?');
		var lastName = prompt('What is your last name?');
		var fullName = firstName + ' ' + lastName; //must put a space in the empty string

		console.log(fullName);

		var age = prompt('How old are you?');
		age = parseInt(age);

		if (age >= 18) {
			console.log('User is an adult.'); 
		} else if (age >= 13) {
			console.log('User is a teenager.');
		}	else if (age >= 0); {
			console.log('User is a child.');
		}

		if (firstName === 'General' && lastName !== 'Assembly') {
			console.log ('May The Force Be With You, General.');
		}

		var faveColor = prompt('What is your favorite color?');

		if(faveColor == 'red' ||
			faveColor == 'blue' ||
			faveColor == 'green' ||
			faveColor == 'yellow') {
			$('h1').css('color', faveColor);
		}


}

		//when the page is loaded
		$(function() { //An anonymous function

			$('img').on('click', askQuestions);	

			//Hide all the sections
			$('h3').next().hide();

			//When the user clicks a h3
			$('h3').on('click', function() {  //telling the browser to listen for an event

				//Toggle the next section
				$(this).next().slideToggle(2000); //this refers to the element user clicked on
				//number changes the speed of the animation
				//could also use fadeToggle

			});
});