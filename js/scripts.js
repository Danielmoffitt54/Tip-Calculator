// Get the values the user inputs(bill amount, service quality, number of people splitting the bill)

function calculateTip() {
    var billAmount = document.getElementById("billAmt").value;
    var serviceQuality = document.getElementById("serviceQual").value;
    var numberOfPeople = document.getElementById("numPeople").value;

    // Validate their input (to make sure what they input is usable)

    // Bill Amount: Empty string, negative values, letters, dollar sign.

    var amount = (Number(billAmount).toFixed(2));// Try turn the value of billAmount into a number and round its decimal to 2 hundreths.
    
    console.log("Amount is: " + amount);

    if (isNaN(amount) || amount <= 0) { // If amount can't be converted into a number or is less than or equal to 0, show an alert for invalid.
        alert("Invalid input for Bill Amount");
        return; // return to exit function if the billAmount is invalid.
    }

    // Service Selector - Not Choosing an option.

    var service = Number(serviceQuality);
    
    if (serviceQuality === 0) {
        alert("Choose option for your service.")
        return;
    }

    // Number of People: Empty string, negative values, decmal values, letters.

    var people = (Number(numberOfPeople).toFixed(0));

    console.log("People is: " + people);

    if (isNaN(people) || people < 1) {
        alert("Invalid input for Number of People");
        return;
    }

    // calculate the amount of tip each person needs to pay.

    var tipPerPerson = (amount * service) / people;

    tipPerPerson = tipPerPerson.toFixed(2);
    console.log("Tip per person: " + tipPerPerson);

    // Display that information to the user.

    document.getElementById("tipAmount").style.display = "block";
    document.getElementById("tip").innerText = tipPerPerson;
}

// Function that is executed when the button is clicked.

document.getElementById("calculateTip").onclick = function() {
    calculateTip();
}

// We are passing an anonymous function (a function without a name to the button's onclick handler when it's clicked)