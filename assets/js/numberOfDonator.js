async function getNumberOfDonator () {
    const { counter } = await fetch('/donator', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

    if (counter || counter === 0) {
        document.getElementById('donator').textContent = counter;
    } else {
        document.getElementById('donator').textContent = '0';
    }
}

getNumberOfDonator();