// ===============================
// Dashboard
// Sprint 2.1
// ===============================

function updateDashboard() {

    const settings = getSettings();
        const expenses = getExpenses();

            // Update farm title
                document.getElementById("farmTitle").textContent = settings.farmName;

                    // Update settings inputs
                        document.getElementById("farmNameInput").value = settings.farmName;
                            document.getElementById("stemsInput").value = settings.stems;
                                document.getElementById("priceInput").value = settings.leafPrice;

                                    // Totals
                                        let totalExpenses = 0;

                                            expenses.forEach(expense => {
                                                    totalExpenses += Number(expense.amount);
                                                        });

                                                            const totalIncome = 0;
                                                                const profit = totalIncome - totalExpenses;

                                                                    // Dashboard cards
                                                                        document.getElementById("income").textContent =
                                                                                formatMoney(totalIncome);

                                                                                    document.getElementById("expenses").textContent =
                                                                                            formatMoney(totalExpenses);

                                                                                                document.getElementById("profit").textContent =
                                                                                                        formatMoney(profit);

                                                                                                            document.getElementById("stems").textContent =
                                                                                                                    settings.stems;

                                                                                                                        document.getElementById("leaves").textContent = 0;

                                                                                                                            document.getElementById("harvestCount").textContent = 0;
                                                                                                                            }

                                                                                                                            // ===============================
                                                                                                                            // Save Settings
                                                                                                                            // ===============================

                                                                                                                            function setupSettings() {

                                                                                                                                const button = document.getElementById("saveSettings");

                                                                                                                                    button.addEventListener("click", () => {

                                                                                                                                            const settings = {

                                                                                                                                                        farmName:
                                                                                                                                                                        document.getElementById("farmNameInput").value,

                                                                                                                                                                                    stems:
                                                                                                                                                                                                    Number(document.getElementById("stemsInput").value),

                                                                                                                                                                                                                leafPrice:
                                                                                                                                                                                                                                Number(document.getElementById("priceInput").value)

                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                saveSettings(settings);

                                                                                                                                                                                                                                                        updateDashboard();

                                                                                                                                                                                                                                                                alert("Settings saved successfully!");
                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                    }