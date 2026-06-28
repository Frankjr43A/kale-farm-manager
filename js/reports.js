/*
=========================================
Kale Farm Manager v2.0
reports.js
Reports Module
=========================================
*/

const Reports = {

    currency(value) {
            return "KES " + Number(value).toLocaleString("en-KE", {
                        minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                            });
                                                },

                                                    render() {

                                                            const report = document.getElementById("reportContent");

                                                                    if (!report) return;

                                                                            const totalExpenses = Storage.getTotalExpenses();
                                                                                    const totalHarvest = Storage.getTotalHarvestKg();
                                                                                            const totalIncome = Storage.getTotalIncome();
                                                                                                    const profit = Storage.getProfit();

                                                                                                            report.innerHTML = `
                                                                                                                        <div class="report-box">
                                                                                                                                        <strong>Total Expenses</strong><br>
                                                                                                                                                        ${this.currency(totalExpenses)}
                                                                                                                                                                    </div>

                                                                                                                                                                                <div class="report-box">
                                                                                                                                                                                                <strong>Total Harvest</strong><br>
                                                                                                                                                                                                                ${totalHarvest.toLocaleString("en-KE")} kg
                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                        <div class="report-box">
                                                                                                                                                                                                                                                        <strong>Total Income</strong><br>
                                                                                                                                                                                                                                                                        ${this.currency(totalIncome)}
                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                <div class="report-box">
                                                                                                                                                                                                                                                                                                                <strong>Net Profit</strong><br>
                                                                                                                                                                                                                                                                                                                                ${this.currency(profit)}
                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                    `;
                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                                                                                                        document.addEventListener("DOMContentLoaded", () => {
                                                                                                                                                                                                                                                                                                                                                            Reports.render();
                                                                                                                                                                                                                                                                                                                                                            });