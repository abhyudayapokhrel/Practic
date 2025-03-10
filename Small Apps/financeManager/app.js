const expenseInputBox = document.getElementById("input-box-exp");
const expenseDescBox = document.getElementById("desc-box-exp");

const incomeInputBox = document.getElementById("input-box-inc");
const incomeDescBox = document.getElementById("desc-box-inc");

const incomeListContainer = document.querySelector('.inc-list');
const expenseListContainer = document.querySelector('.exp-list');
const totalDisplay = document.getElementById("total-you-have");

function addIncome() {
    const value = parseFloat(incomeInputBox.value.trim());
    const description = incomeDescBox.value.trim();

    if (isNaN(value) || value === 0 || description === '') {
        alert("Please enter a valid amount and description for income.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `<span>${description}</span>: Rs.${value.toFixed(2)}`;

    const removeButton = document.createElement("span");
    removeButton.innerHTML = "\u00d7"; // Cross symbol
    removeButton.addEventListener('click', function () {
        li.remove();
        saveIncomeData(); // Save updated list to localStorage
        updateTotal();
    });

    li.appendChild(removeButton);
    incomeListContainer.appendChild(li);

    incomeInputBox.value = '';
    incomeDescBox.value = '';
    saveIncomeData();
    updateTotal();
}

function addExpense() {
    const value = parseFloat(expenseInputBox.value.trim());
    const description = expenseDescBox.value.trim();

    if (isNaN(value) || value === 0 || description === '') {
        alert("Please enter a valid amount and description for expenses.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `<span>${description}</span>: Rs.${value.toFixed(2)}`;

    const removeButton = document.createElement("span");
    removeButton.innerHTML = "\u00d7"; // Cross symbol
    removeButton.addEventListener('click', function () {
        li.remove();
        saveExpenseData(); // Save updated list to localStorage
        updateTotal();
    });

    li.appendChild(removeButton);
    expenseListContainer.appendChild(li);

    expenseInputBox.value = '';
    expenseDescBox.value = '';
    saveExpenseData();
    updateTotal();
}


incomeInputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { addIncome(); }
});
incomeDescBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { addIncome(); }
});

expenseInputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { addExpense(); }
});
expenseDescBox.addEventListener("keydown", function (e) {
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

// Calculate totals and update display
function updateTotal() {
    const incomes = [...incomeListContainer.querySelectorAll("li")].map(li => {
        const text = li.textContent.replace(/\u00d7$/, '').split(": Rs.")[1];
        return parseFloat(text) || 0;
    });
    const expenses = [...expenseListContainer.querySelectorAll("li")].map(li => {
        const text = li.textContent.replace(/\u00d7$/, '').split(": Rs.")[1];
        return parseFloat(text) || 0;
    });

    const totalIncome = incomes.reduce((acc, cur) => acc + cur, 0);
    const totalExpense = expenses.reduce((acc, cur) => acc + cur, 0);

    const total = totalIncome - totalExpense;
    totalDisplay.textContent = `You have Rs.${total.toFixed(2)} remaining.`;
}

// Initialize data
showIncomeData();
showExpenseData();
updateTotal();
// rmeove btn not working
removeButton.addEventListener('click',function(){
    li.remove;
    saveIncomeData();
    saveExpenseData();
    updateTotal();
});

