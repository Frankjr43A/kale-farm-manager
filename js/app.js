/*
=========================================
Kale Farm Manager v2.2
app.js
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const navButtons = document.querySelectorAll(".nav-btn");
        const quickButtons = document.querySelectorAll(".quick-nav");
            const pages = document.querySelectorAll(".page");

                function showPage(pageId) {

                        pages.forEach(page => page.classList.remove("active"));

                                navButtons.forEach(btn => btn.classList.remove("active"));

                                        const page = document.getElementById(pageId);

                                                if (page) {
                                                            page.classList.add("active");
                                                                    }

                                                                            const activeNav = document.querySelector(
                                                                                        `.nav-btn[data-page="${pageId}"]`
                                                                                                );

                                                                                                        if (activeNav) {
                                                                                                                    activeNav.classList.add("active");
                                                                                                                            }

                                                                                                                                    if (typeof Dashboard !== "undefined") {
                                                                                                                                                Dashboard.refresh();
                                                                                                                                                        }

                                                                                                                                                                if (typeof Reports !== "undefined") {
                                                                                                                                                                            Reports.render();
                                                                                                                                                                                    }

                                                                                                                                                                                        }

                                                                                                                                                                                            // Sidebar Navigation

                                                                                                                                                                                                navButtons.forEach(button => {

                                                                                                                                                                                                        button.addEventListener("click", () => {

                                                                                                                                                                                                                    showPage(button.dataset.page);

                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                    // Dashboard Quick Buttons

                                                                                                                                                                                                                                        quickButtons.forEach(button => {

                                                                                                                                                                                                                                                button.addEventListener("click", () => {

                                                                                                                                                                                                                                                            showPage(button.dataset.page);

                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                            // Backup

                                                                                                                                                                                                                                                                                const backupBtn = document.getElementById("backupBtn");

                                                                                                                                                                                                                                                                                    if (backupBtn) {

                                                                                                                                                                                                                                                                                            backupBtn.addEventListener("click", () => {

                                                                                                                                                                                                                                                                                                        Storage.backup();

                                                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                        // Restore

                                                                                                                                                                                                                                                                                                                            const restoreBtn = document.getElementById("restoreBtn");

                                                                                                                                                                                                                                                                                                                                if (restoreBtn) {

                                                                                                                                                                                                                                                                                                                                        restoreBtn.addEventListener("click", () => {

                                                                                                                                                                                                                                                                                                                                                    Storage.restore();

                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                    // Clear

                                                                                                                                                                                                                                                                                                                                                                        const clearBtn = document.getElementById("clearBtn");

                                                                                                                                                                                                                                                                                                                                                                            if (clearBtn) {

                                                                                                                                                                                                                                                                                                                                                                                    clearBtn.addEventListener("click", () => {

                                                                                                                                                                                                                                                                                                                                                                                                if (!confirm("Delete ALL farm records?")) return;

                                                                                                                                                                                                                                                                                                                                                                                                            Storage.clearAll();

                                                                                                                                                                                                                                                                                                                                                                                                                        if (typeof Expenses !== "undefined") {
                                                                                                                                                                                                                                                                                                                                                                                                                                        Expenses.render();
                                                                                                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (typeof Harvests !== "undefined") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Harvests.render();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (typeof Dashboard !== "undefined") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Dashboard.refresh();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (typeof Reports !== "undefined") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Reports.render();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            // Initial Load

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                showPage("dashboard");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (typeof Expenses !== "undefined") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Expenses.render();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (typeof Harvests !== "undefined") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Harvests.render();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                });