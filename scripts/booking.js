/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const costPerDayFull = 35;
const costPerDayHalf = 20;
let selectedDays = [];
let totalCost = 0; // Declare and initialize totalCost
let selectedRate = costPerDayFull; // Declare and initialize selectedRate


const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');


// Ans-You need to initialize the selectedDays array when the page is loaded.


window.onload = function () {
    selectedDays = [];
  };
  
//Ans-selectedDays[] array should be initialized when the page is loaded to store the selected days. 
// It needs to be updated whenever a day is clicked. It should also be reset when the "clear days" button is clicked.


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


// Add event listener to each day button
dayButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    if (!button.classList.contains('clicked')) {
      button.classList.add('clicked');
      selectedDays.push(button.id);
      updateCalculatedCost();
    }
  });
});





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener('click', function () {
  selectedDays = [];
  dayButtons.forEach(function(button) {
    button.classList.remove('clicked');
  });
  
  totalCost = 0;
  updateCalculatedCost(); // Update the calculated cost to 0
});

  





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', function () {
  selectedRate = costPerDayHalf;
  halfDayButton.classList.add('clicked');
  fullDayButton.classList.remove('clicked');
  updateCalculatedCost();
});

fullDayButton.addEventListener('click', function () {
  selectedRate = costPerDayFull;
  fullDayButton.classList.add('clicked');
  halfDayButton.classList.remove('clicked');
  updateCalculatedCost();
});




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


// Add event listener to full-day button
fullDayButton.addEventListener('click', function () {
    // Update selectedRate to full-day rate
    selectedRate = costPerDayFull;
    
    // Apply "clicked" class to full-day button and remove from half-day button
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    
    // Recalculate total cost based on selected days and new rate
    totalCost = calculateTotalCost(selectedDays, selectedRate);
    calculatedCostElement.textContent = totalCost; // Update calculated cost element
  });
  



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


// Function to calculate total cost based on selected days and rate
function calculateTotalCost(days, rate) {
  const totalDays = days.length;
  return totalDays * rate;
}
  
  // Update calculated cost element whenever a calculation is needed
function updateCalculatedCost() {
  totalCost = calculateTotalCost(selectedDays, selectedRate);
  calculatedCostElement.textContent = totalCost;
}


 // You can call the updateCalculatedCost function wherever a calculation is needed.
 // For example, call it when days are selected, rate is changed, etc.
 updateCalculatedCost();
  