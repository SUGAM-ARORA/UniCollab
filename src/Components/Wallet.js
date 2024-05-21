import React, { useState } from "react";
import "./Wallet.css";

function Wallet() {
  const [balance, setBalance] = useState(100); 
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Earned Points", amount: 150, date: "2023-05-10" },
    { id: 2, description: "Spent Points on ABC", amount: -50, date: "2023-05-15" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [pointsToAdd, setPointsToAdd] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("date");
  const [modalType, setModalType] = useState(""); // new state for modal type
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddPoints = (amount) => {
    if (!isNaN(amount) && amount > 0) {
      const newTransaction = {
        id: transactions.length + 1,
        description: description || "Added Points",
        amount: parseInt(amount),
        date: new Date().toISOString().split('T')[0], // Current date
      };
      setBalance(balance + newTransaction.amount);
      setTransactions([...transactions, newTransaction]);
      closeModal();
      showToast("Points added successfully!");
    }
  };

  const handleEditTransaction = () => {
    if (!isNaN(pointsToAdd) && pointsToAdd !== 0) {
      const updatedTransaction = {
        ...currentTransaction,
        description: description || "Updated Transaction",
        amount: parseInt(pointsToAdd),
        date: new Date().toISOString().split('T')[0], // Current date
      };
      const updatedTransactions = transactions.map((transaction) =>
        transaction.id === currentTransaction.id ? updatedTransaction : transaction
      );
      setBalance(balance + (updatedTransaction.amount - currentTransaction.amount));
      setTransactions(updatedTransactions);
      closeModal();
      showToast("Transaction updated successfully!");
    }
  };

  const handleDeleteTransaction = (id) => {
    const transactionToDelete = transactions.find((transaction) => transaction.id === id);
    setBalance(balance - transactionToDelete.amount);
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
    showToast("Transaction deleted successfully!");
  };

  const handleOpenEditModal = (transaction) => {
    setCurrentTransaction(transaction);
    setPointsToAdd(transaction.amount);
    setDescription(transaction.description);
    setIsEditMode(true);
    setModalType("edit");
    setIsModalOpen(true);
  };

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPointsToAdd('');
    setDescription('');
    setIsEditMode(false);
    setCurrentTransaction(null);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 4000);
  };

  const handleTransaction = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (modalType === "topup") {
        handleAddPoints(pointsToAdd);
      } else if (modalType === "withdraw") {
        handleWithdrawPoints(pointsToAdd);
      } else if (modalType === "transfer") {
        handleTransferPoints(pointsToAdd);
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleWithdrawPoints = (amount) => {
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      const newTransaction = {
        id: transactions.length + 1,
        description: description || "Withdraw Points",
        amount: -parseInt(amount),
        date: new Date().toISOString().split('T')[0], // Current date
      };
      setBalance(balance - amount);
      setTransactions([...transactions, newTransaction]);
      closeModal();
      showToast("Points withdrawn successfully!");
    }
  };

  const handleTransferPoints = (amount) => {
    // Implement transfer points logic here
    // For now, we'll just treat it as adding points to the balance for demonstration purposes
    handleAddPoints(amount);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") return true;
    if (filter === "earned") return transaction.amount > 0;
    if (filter === "spent") return transaction.amount < 0;
    return true;
  });

  const sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortOrder === "date") return new Date(b.date) - new Date(a.date);
    if (sortOrder === "amount") return b.amount - a.amount;
    return 0;
  });

  return (
    <div className="wallet-container">
      <h2 className="wallet-title"><i className="fas fa-wallet"></i> My Wallet</h2>
      <div className="wallet-balance">
        <h3>Balance</h3>
        <p><i className="fas fa-coins"></i> {balance} Points</p>
      </div>
      <div className="wallet-buttons">
        <button className="wallet-button" onClick={() => handleOpenModal("topup")}>
          <i className="fas fa-plus-circle"></i> Top Up
        </button>
        <button className="wallet-button" onClick={() => handleOpenModal("withdraw")}>
          <i className="fas fa-minus-circle"></i> Withdraw
        </button>
        <button className="wallet-button" onClick={() => handleOpenModal("transfer")}>
          <i className="fas fa-exchange-alt"></i> Transfer
        </button>
        <button className="wallet-button" onClick={() => handleOpenModal("history")}>
          <i className="fas fa-history"></i> History
        </button>
      </div>
      <div className="wallet-transactions">
        <h3>Recent Transactions</h3>
        <div className="filters">
          <label>
            <i className="fas fa-filter"></i> Filter: 
            <select value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="earned">Earned</option>
              <option value="spent">Spent</option>
            </select>
          </label>
          <label>
            <i className="fas fa-sort"></i> Sort by: 
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </label>
        </div>
        <ul>
          {sortedTransactions.map((transaction) => (
            <li key={transaction.id}>
              <span>{transaction.description}</span>
              <span>{transaction.date}</span>
              <span className={transaction.amount < 0 ? "negative" : "positive"}>
                {transaction.amount} Points
              </span>
              <button onClick={() => handleOpenEditModal(transaction)}><i className="fas fa-edit"></i></button>
              <button onClick={() => handleDeleteTransaction(transaction.id)}><i className="fas fa-trash"></i></button>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content fade-in">
            <h3>
              {isEditMode 
                ? "Edit Transaction" 
                : modalType === "topup" ? "Top Up Points" 
                : modalType === "withdraw" ? "Withdraw Points"
                : modalType === "transfer" ? "Transfer Points"
                : "Transaction History"
              }
            </h3>
            {modalType !== "history" && (
              <>
                <input
                  type="number"
                  value={pointsToAdd}
                  onChange={(e) => setPointsToAdd(e.target.value)}
                  placeholder="Enter points"
                  className="modal-input"
                />
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description"
                  className="modal-input"
                />
                {isLoading 
                  ? <div className="loading"><i className="fas fa-spinner fa-spin"></i> Processing...</div> 
                  : <button className="modal-button" onClick={isEditMode ? handleEditTransaction : handleTransaction}>
                      {isEditMode ? "Update" : modalType === "topup" ? "Top Up" : modalType === "withdraw" ? "Withdraw" : "Proceed"}
                    </button>
                }
              </>
            )}
            {modalType === "history" && (
              <div>
                <ul>
                  {transactions.map(transaction => (
                    <li key={transaction.id}>
                      <span>{transaction.description}</span>
                      <span>{transaction.date}</span>
                      <span className={transaction.amount < 0 ? "negative" : "positive"}>
                        {transaction.amount} Points
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button className="modal-button cancel" onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      {toastMessage && <div className="toast">{toastMessage}</div>}
    </div>
  );
}

export default Wallet;
