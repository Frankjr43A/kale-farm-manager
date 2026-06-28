/*
=========================================
Kale Farm Manager v2.0
dashboard.js
Dashboard Functions
=========================================
*/

const Dashboard = {

    currency(value) {
            return "KES " + Number(value).toLocaleString("en-KE", {
                        minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                            });
                                                },

                                                    refresh() {

                                                            const expenses = Storage.getTotalExpenses();
                                                                    const harvestKg = Storage.getTotalHarvestKg();
                                                                            const income = Storage.getTotalIncome();
                                                                                    const profit = Storage.getProfit();

                                                                                            const totalExpenses = document.getElementById("totalExpenses");
                                                                                                    const totalHarvest = document.getElementById("totalHarvest");
                                                                                                            const totalIncome = document.getElementById("totalIncome");
                                                                                                                    const profitDisplay = document.getElementById("profit");

                                                                                                                            if (totalExpenses) {
                                                                                                                                        totalExpenses.textContent = this.currency(expenses);
                                                                                                                                                }

                                                                                                                                                        if (totalHarvest) {
                                                                                                                                                                    totalHarvest.textContent =
                                                                                                                                                                                    Number(harvestKg).toLocaleString("en-KE") + " kg";
                                                                                                                                                                                            }

                                                                                                                                                                                                    if (totalIncome) {
                                                                                                                                                                                                                totalIncome.textContent = this.currency(income);
                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                if (profitDisplay) {
                                                                                                                                                                                                                                            profitDisplay.textContent = this.currency(profit);

                                                                                                                                                                                                                                                        if (profit >= 0) {
                                                                                                                                                                                                                                                                        profitDisplay.style.color = "#2e7d32";
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                    profitDisplay.style.color = "#d32f2f";
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                            };

                                                                                                                                                                                                                                                                                                                            // Refresh dashboard once the page loads
                                                                                                                                                                                                                                                                                                                            document.addEventListener("DOMContentLoaded", () => {
                                                                                                                                                                                                                                                                                                                                Dashboard.refresh();
                                                                                                                                                                                                                                                                                                                                });