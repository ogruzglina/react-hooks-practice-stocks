import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [ stocks, setStocks] = useState([]);
  const [ search, setSearch ] = useState('Tech');
  const [ sortBy, setSortBy ] = useState('Alphabetically');
  
  useEffect( () => {
    fetch('http://localhost:3001/stocks')
      .then(r => r.json())
      .then(stocksData => {
        const updatedStocksData = stocksData.map( stock => {
          return {
            ...stock,
            isPortfolio: false,
          }
        });
        setStocks( stocks => updatedStocksData);
      })
  }, []);

  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if (sortBy === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name);
    } else {
      return stock1.price - stock2.price;
    }
  });
  const portfolioStocks = stocks.filter( stock => stock.isPortfolio === true).filter(stock => stock.type === search);
  const availableStocks = sortedStocks.filter(stock => stock.type === search);

  function handleMoveStock ( movedStock ) {
    movedStock.isPortfolio = !movedStock.isPortfolio;
    setStocks( stocks.map( stock => 
      stock.id === movedStock.id ? movedStock : stock));
  }

  function handleChangeFilter (filterValue) {
    setSearch(filterValue);
  }

  function handleSort (method) {
    setSortBy(method);
  }
  
  return (
    <div>
      <SearchBar onChangeFilter = { handleChangeFilter } onSort = {handleSort} sortBy = { sortBy } />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks = { availableStocks } 
            onMoveStock = { handleMoveStock }
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolioStocks = { portfolioStocks } 
            onMoveStock = { handleMoveStock }
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
