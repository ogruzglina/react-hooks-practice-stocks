import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, onMoveStock }) {
  const portfolioStock = portfolioStocks.map( stock => 
    <Stock key = { stock.id } stock = { stock } onMoveStock = { onMoveStock }/>);

  return (
    <div>
      <h2>My Portfolio</h2>
      { portfolioStock }
    </div>
  );
}

export default PortfolioContainer;
