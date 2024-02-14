document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    addTransaction(description, amount);
});

function addTransaction(description, amount) {
    // For simplicity, we'll just append to the DOM. In a real app, you'd also send this to the server.
    const transactionList = document.getElementById('transaction-list');
    const entry = document.createElement('div');
    entry.textContent = `${description}: $${amount}`;
    transactionList.appendChild(entry);

    // Reset form
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}
