const expenseInputBox = document.getElementById("input-box-exp");
const incomeInputBox = document.getElementById("input-box-inc");

const incomeListContainer = document.querySelector('.inc-list');
const expenseListContainer = document.querySelector('.exp-list');

function addIncome() {
    if (incomeInputBox.value.trim() === '') {
        alert("You must add something");
    } else {
        const li = document.createElement("li");
        li.innerHTML = incomeInputBox.value.trim();

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.addEventListener('click', function() {
            li.remove();
            saveData();
        });

        li.appendChild(span);
        incomeListContainer.appendChild(li);
    }
    incomeInputBox.value = '';
    saveData();
}

function addExpense() {
    if (expenseInputBox.value.trim() === '') {
        alert("You must add something");
    } else {
        const li = document.createElement("li");
        li.innerHTML = expenseInputBox.value.trim();

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.addEventListener('click', function() {
            li.remove();
            saveData();
        });

        li.appendChild(span);
        expenseListContainer.appendChild(li);
    }
    expenseInputBox.value = '';
    saveData();
}

incomeInputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") { addIncome(); }
});
expenseInputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") { addExpense(); }
});

// save data