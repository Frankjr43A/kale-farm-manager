// ===============================
// Expense Tracker
// Sprint 2.1
// ===============================

function renderExpenses() {

    const expenseList = document.getElementById("expenseList");
    const expenses = getExpenses();

    if (expenses.length === 0) {
        expenseList.innerHTML =
            '<div class="activity-item">No expenses yet.</div>';
        return;
    }

    expenseList.innerHTML = "";

    expenses
        .slice()
        .reverse()
        .forEach(expense => {

            const item = document.createElement("div");
            item.className = "activity-item";

            item.innerHTML = 
                <strong>${expense.category}</strong><br>
                ${formatMoney(expense.amount)}<br>
                <small>${expense.date}</small><br>
                <em>${expense.notes}</em>
            ;

            expenseList.appendChild(item);

        });

}

function setupExpenses() {

    document.getElementById("saveExpense")
        .addEventListener("click", () => {

            const date =
                document.getElementById("expenseDate").value;

            const category =
                document.getElementById("expenseCategory").value;

            const amount =
                Number(document.getElementById("expenseAmount").value);

            const notes =
                document.getElementById("expenseNotes").value;

            if (!date || amount <= 0) {
                alert("Please enter a valid date and amount.");
                return;
            }

            const expenses = getExpenses();

            expenses.push({
                date,
                category,
                amount,
                notes
            });

            saveExpenses(expenses);

            // Clear form
            document.getElementById("expenseDate").value = "";
            document.getElementById("expenseAmount").value = "";
            document.getElementById("expenseNotes").value = "";

            renderExpenses();
            updateDashboard();

            alert("Expense saved successfully!");

        });

}