async function fetchBalance() {
    const balance = await fetch("/balance", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());

    if (balance) {
        const money = balance.pending[0].amount;
        const lengthString = money.toString().length;
        const moneyWithComma = money
            .toString()
            .slice(0, lengthString - 2)
            .concat(",", money.toString().slice(lengthString - 2));
        document.getElementById("balance").textContent = `${moneyWithComma} €`;

        const lunchDistribuate = (parseFloat(moneyWithComma) / 4.10).toFixed(0);
        document.getElementById("lunch-distribute").textContent = `${lunchDistribuate}`;
    }
}

fetchBalance();