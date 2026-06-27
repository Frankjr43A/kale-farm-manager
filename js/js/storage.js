// ===============================
// Kale Farm Manager Storage
// Sprint 2.1
// ===============================

const STORAGE_KEYS = {
    SETTINGS: "kaleFarmSettings",
        EXPENSES: "kaleFarmExpenses"
        };

        // ---------- SETTINGS ----------

        function getSettings() {
            const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);

                if (data) {
                        return JSON.parse(data);
                            }

                                return {
                                        farmName: "Kale Farm",
                                                stems: 1000,
                                                        leafPrice: 10
                                                            };
                                                            }

                                                            function saveSettings(settings) {
                                                                localStorage.setItem(
                                                                        STORAGE_KEYS.SETTINGS,
                                                                                JSON.stringify(settings)
                                                                                    );
                                                                                    }

                                                                                    // ---------- EXPENSES ----------

                                                                                    function getExpenses() {
                                                                                        const data = localStorage.getItem(STORAGE_KEYS.EXPENSES);

                                                                                            if (data) {
                                                                                                    return JSON.parse(data);
                                                                                                        }

                                                                                                            return [];
                                                                                                            }

                                                                                                            function saveExpenses(expenses) {
                                                                                                                localStorage.setItem(
                                                                                                                        STORAGE_KEYS.EXPENSES,
                                                                                                                                JSON.stringify(expenses)
                                                                                                                                    );
                                                                                                                                    }

                                                                                                                                    // ---------- HELPERS ----------

                                                                                                                                    function formatMoney(amount) {
                                                                                                                                        return "KES " + Number(amount).toLocaleString();
                                                                                                                                        }