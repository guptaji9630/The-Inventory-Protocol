import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// Styled components



export default function SupermarketInventory() {
  const [inventory, setInventory] = useState([]);
  const [lastSync, setLastSync] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchInventory();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchInventory = () => {
    const data = [
      { id: 1, name: 'Apple', expire_date: '2023-05-25', nftToken: generateToken(), quantity: 2, block: '0000x1', previousHash: '0000', hash: '0000x2' },
      { id: 2, name: 'Banana', expire_date: '2023-05-23', nftToken: generateToken(), quantity: 50, block: '0000x2', previousHash: '0000x1', hash: '0000x3' },
      { id: 3, name: 'Orange', expire_date: '2023-05-22', nftToken: generateToken(), quantity: 75, block: '0000x3', previousHash: '0000x2', hash: '0000x4' },
      { id: 4, name: 'Maaza', expire_date: '2023-05-25', nftToken: generateToken(), quantity: 20, block: '0000x4', previousHash: '0000x3', hash: '0000x5' },
      { id: 5, name: 'Yakut milk', expire_date: '2023-05-23', nftToken: generateToken(), quantity: 50, block: '0000x5', previousHash: '0000x4', hash: '0000x6' },
      { id: 6, name: 'Cereals', expire_date: '2023-05-22', nftToken: generateToken(), quantity: 7, block: '0000x6', previousHash: '0000x5', hash: '0000x7' },
      { id: 7, name: 'Roasted nuts', expire_date: '2023-05-25', nftToken: generateToken(), quantity: 20, block: '0000x7', previousHash: '0000x6', hash: '0000x8' },
      { id: 8, name: 'Bread', expire_date: '2023-05-23', nftToken: generateToken(), quantity: 50, block: '0000x8', previousHash: '0000x7', hash: '0000x9' },
      { id: 9, name: 'Milk', expire_date: '2023-05-22', nftToken: generateToken(), quantity: 75, block: '0000x9', previousHash: '0000x8', hash: '0000x10' },
      { id: 10, name: 'Eggs', expire_date: '2023-05-24', nftToken: generateToken(), quantity: 30, block: '0000x10', previousHash: '0000x9', hash: '0000x11' },
      { id: 11, name: 'Cheese', expire_date: '2023-05-23', nftToken: generateToken(), quantity: 20, block: '0000x11', previousHash: '0000x10', hash: '0000x12' },
      { id: 12, name: 'Sausage', expire_date: '2023-05-26', nftToken: generateToken(), quantity: 50, block: '0000x12', previousHash: '0000x11', hash: '0000x13' },
      { id: 13, name: 'Coffee', expire_date: '2023-05-28', nftToken: generateToken(), quantity: 60, block: '0000x13', previousHash: '0000x12', hash: '0000x14' },
      { id: 14, name: 'Tea', expire_date: '2023-05-27', nftToken: generateToken(), quantity: 70, block: '0000x14', previousHash: '0000x13', hash: '0000x15' },
      { id: 15, name: 'Cookies', expire_date: '2023-05-29', nftToken: generateToken(), quantity: 40, block: '0000x15', previousHash: '0000x14', hash: '0000x16' },
      { id: 16, name: 'Yogurt', expire_date: '2023-05-26', nftToken: generateToken(), quantity: 50, block: '0000x16', previousHash: '0000x15', hash: '0000x17' },
      { id: 17, name: 'Butter', expire_date: '2023-05-25', nftToken: generateToken(), quantity: 30, block: '0000x17', previousHash: '0000x16', hash: '0000x18' },
      { id: 18, name: 'Peanut Butter', expire_date: '2023-05-23', nftToken: generateToken(), quantity: 20, block: '0000x18', previousHash: '0000x17', hash: '0000x19' },
      { id: 19, name: 'Jam', expire_date: '2023-05-27', nftToken: generateToken(), quantity: 25, block: '0000x19', previousHash: '0000x18', hash: '0000x20' },
      { id: 20, name: 'Chocolate', expire_date: '2023-05-29', nftToken: generateToken(), quantity: 35, block: '0000x20', previousHash: '0000x19', hash: '0000x21' }
    ];
    setInventory(data);
    setLastSync(new Date().toLocaleString());
  }

  const generateToken = () => {
    // Generate a random 12-digit hexadecimal token
    return '0x' + Math.floor(Math.random() * 0xFFFFFFFFFFFF).toString(16).padStart(12, '0');
  }

  return (
    <div className="container">
      <h2>Supermarket Inventory Ledger</h2>
      <p>Last Blockchain Sync: {lastSync}</p>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Expiry Date</th>
            <th>Quantity</th>
            <th>Dynamic Token </th>
            <th>Block</th>
            <th>Previous Hash</th>
            <th>Hash</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.expire_date}</td>
              <td>{item.quantity}</td>
              <td>{item.nftToken}</td>
              <td>{item.block}</td>
              <td>{item.previousHash}</td>
              <td>{item.hash}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <style jsx>{`
          .container {
              font-family: 'Roboto Mono', monospace;
              color: #FFFFFF;
              background-color: #282c34;
              padding: 20px;
              border-radius: 10px;
          }
          
          h2 {
              color: #61dafb;
              margin-bottom: 10px;
          }
          
          p {
              color: #61dafb;
          }
          
          table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
          }
          
          table th, table td {
              border: 1px solid #61dafb;
              padding: 10px;
          }
          
          table th {
              background-color: #282c34;
              color: #61dafb;
          }
          
          table tr:nth-child(even) {
              background-color: #333842;
          }
          
          table tr:nth-child(odd) {
              background-color: #282c34;
          }
          
      `}
      </style> */}
    </div>

  )
}