import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onMoveStock }) {
  const showStock = stocks.map( stock => 
    <Stock 
      key = { stock.id } 
      stock = { stock } 
      onMoveStock = { onMoveStock }
    />);
  return (
    <div>
      <h2>Stocks</h2>
      { showStock }
    </div>
  );
}

export default StockContainer;
