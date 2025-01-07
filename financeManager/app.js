const expenseInputBox = document.getElementById("input-box-exp");
const incomeInputBox = document.getElementById("input-box-inc");

const incomeListContainer = document.querySelector('.inc-list');
const expenseListContainer = document.querySelector('.exp-list');
const totalDisplay = document.getElementById("total-you-have");

function addIncome() {
    if (incomeInputBox.value.trim() === '') {
        alert("You must add something");
    } else {
        const li = document.createElement("li");
        const value = parseFloat(incomeInputBox.value.trim());
        if (isNaN(value)) {
            alert("Please enter a valid number");
            return;
        }
        li.innerHTML = value;

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.addEventListener('click', function () {
            li.remove();
            saveIncomeData();
            updateTotal();
        });

        li.appendChild(span);
        incomeListContainer.appendChild(li);
    }
    incomeInputBox.value = '';
    saveIncomeData();
    updateTotal();
}

function addExpense() {
    if (expenseInputBox.value.trim() === '') {
        alert("You must add something");
    } else {
        const li = document.createElement("li");
        const value = parseFloat(expenseInputBox.value.trim());
        if (isNaN(value)) {
            alert("Please enter a valid number");
            return;
        }
        li.innerHTML = value;

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.addEventListener('click', function () {
            li.remove();
            saveExpenseData();
            updateTotal();
        });

        li.appendChild(span);
        expenseListContainer.appendChild(li);
    }
    expenseInputBox.value = '';
    saveExpenseData();
    updateTotal();
}

incomeInputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { addIncome(); }
});
expenseInputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { addExpense(); }
});

// Save data
function saveIncomeData() {
    localStorage.setItem("incomeData", incomeListContainer.innerHTML);
}

function saveExpenseData() {
    localStorage.setItem("expenseData", expenseListContainer.innerHTML);
}

function showIncomeData() {
    const data = localStorage.getItem("incomeData");
    if (data) incomeListContainer.innerHTML = data;
}

function showExpenseData() {
    const data = localStorage.getItem("expenseData");
    if (data) expenseListContainer.innerHTML = data;
}

function remove(e){
  if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveIncomeData();
        saveExpenseData();}
}

// Calculate totals and update display
function updateTotal() {
    const incomes = [...incomeListContainer.querySelectorAll("li")].map(li => parseFloat(li.textContent) || 0);
    const expenses = [...expenseListContainer.querySelectorAll("li")].map(li => parseFloat(li.textContent) || 0);

    const totalIncome = incomes.reduce((acc, cur) => acc + cur, 0);
    const totalExpense = expenses.reduce((acc, cur) => acc + cur, 0);

    const total = totalIncome - totalExpense;
    totalDisplay.textContent = `You have Rs.${total.toFixed(2)} remaining.`;
}

// Initialize data
showIncomeData();
showExpenseData();
updateTotal();
