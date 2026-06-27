// ===============================
// Kale Farm Manager
// Main App
// Sprint 2.1
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Initialize modules
    setupSettings();
    setupExpenses();

    renderExpenses();
    updateDashboard();

    // ---------------------------
    // Bottom Navigation
    // ---------------------------

    const buttons = document.querySelectorAll(".nav-btn");
    const screens = document.querySelectorAll(".screen");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const target = button.dataset.screen;

            screens.forEach(screen => {
                screen.classList.remove("active");
            });

            document.getElementById(target)
                .classList.add("active");

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

        });

    });

    // ---------------------------
    // Quick Action Button
    // ---------------------------

    document.getElementById("gotoExpense")
        .addEventListener("click", () => {

            screens.forEach(screen => {
                screen.classList.remove("active");
            });

            document
                .getElementById("expensesScreen")
                .classList.add("active");

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            document
                .querySelector('[data-screen="expensesScreen"]')
                .classList.add("active");

        });

});