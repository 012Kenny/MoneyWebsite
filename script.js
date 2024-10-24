// Calclulating budget

function calculateBudget() {
  // variables //
  const income = document.getElementById('income').value;
  const household = document.getElementById('household').value;
  const transport = document.getElementById('transport').value;
  const personal = document.getElementById('personal').value;
  // ------------ //

  // if the user didnt full out all the parts then it will make the user fill it out
  
  if (income === "" || household === "" || transport === "" || personal === "") {
      alert("Please fill in all fields.");
      return;
  }
  // ----------- //
  // Adds all the number values of household, transport, personal and subtracts it with your income
  const totalExpenses = parseFloat(household) + parseFloat(transport) + parseFloat(personal);
  const balance = income - totalExpenses;
  
  document.getElementById('balance').textContent = balance.toFixed(2);

  // checks if you're either over 0, under 0 or 0 for budget
  const message = document.getElementById('message');
  if (balance > 0) {
    message.textContent = "You're withing your budget";
    message.style.color = "#28a745";
  } else if (balance < 0) {
    message.textContent = "You've exceeded your budget";
    message.style.color = "#dc3545";
  } else {
    message.textContent = "You're breaking even";
    message.style.color = "#ffc107";
  }
}