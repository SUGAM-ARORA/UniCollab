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

  const handleAddPoints = () => {
    if (!isNaN(pointsToAdd) && pointsToAdd > 0) {
      const newTransaction = {
        id: transactions.length + 1,
        description: description || "Added Points",
        amount: parseInt(pointsToAdd),
        date: new Date().toISOString().split('T')[0], // Current date
      };
      setBalance(balance + newTransaction.amount);
      setTransactions([...transactions, newTransaction]);
      closeModal();
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
    }
  };

  const handleDeleteTransaction = (id) => {
    const transactionToDelete = transactions.find((transaction) => transaction.id === id);
    setBalance(balance - transactionToDelete.amount);
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const handleOpenEditModal = (transaction) => {
    setCurrentTransaction(transaction);
    setPointsToAdd(transaction.amount);
    setDescription(transaction.description);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPointsToAdd('');
    setDescription('');
    setIsEditMode(false);
    setCurrentTransaction(null);
  };

  return (
    <div className="wallet-container">
      <h2 className="wallet-title">My Wallet</h2>
      <div className="wallet-balance">
        <h3>Balance</h3>
        <p>{balance} Points</p>
      </div>
      <div className="wallet-transactions">
        <h3>Recent Transactions</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <span>{transaction.description}</span>
              <span>{transaction.date}</span>
              <span className={transaction.amount < 0 ? "negative" : "positive"}>
                {transaction.amount} Points
              </span>
              <button onClick={() => handleOpenEditModal(transaction)}>Edit</button>
              <button onClick={() => handleDeleteTransaction(transaction.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <button className="wallet-add-funds" onClick={() => setIsModalOpen(true)}>
        Add Points
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content fade-in">
            <h3>{isEditMode ? "Edit Transaction" : "Add Points"}</h3>
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
            <button className="modal-button" onClick={isEditMode ? handleEditTransaction : handleAddPoints}>
              {isEditMode ? "Update" : "Add"}
            </button>
            <button className="modal-button cancel" onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;
