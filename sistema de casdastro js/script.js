
    let transactions = [];

    function addTransaction() {
      const description = document.getElementById('description').value;
      const amount = parseFloat(document.getElementById('amount').value);
      const type = document.getElementById('type').value;

      const transaction = { description, amount, type };
      transactions.push(transaction);

      updateBalance();
      renderTransactions();
    }

    function updateBalance() {
      const balanceElement = document.getElementById('balance');
      const balance = transactions.reduce((acc, transaction) => {
        return transaction.type === 'expense' ? acc - transaction.amount : acc + transaction.amount;
      }, 0);
      balanceElement.textContent = balance.toFixed(2);
    }

    function renderTransactions() {
      const transactionsList = document.getElementById('transactions');
      transactionsList.innerHTML = '';

      transactions.forEach((transaction, index) => {
        const li = document.createElement('li');
        li.textContent = `${transaction.description}: R$ ${transaction.amount.toFixed(2)} (${transaction.type === 'expense' ? 'Despesa' : 'Receita'})`;

        transactionsList.appendChild(li);
      });
    }