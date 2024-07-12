import React, { useEffect, useState } from "react";
import axios from "axios";

const MainContent = () => {
  const [btcPrice, setBtcPrice] = useState(null);

  useEffect(() => {
    const fetchBtcPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
        );
        setBtcPrice(response.data.bpi.USD.rate);
      } catch (error) {
        console.error("Error fetching BTC price:", error);
      }
    };

    fetchBtcPrice();
  }, []);

  return (
    <div className="flex flex-col p-4 w-full overflow-auto">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">$40,291</div>
            <div className="text-green-500">+0.25%</div>
          </div>
          <div className="text-gray-400">Bitcoin - BTC</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">$18,291</div>
            <div className="text-green-500">+0.25%</div>
          </div>
          <div className="text-gray-400">Ethereum - ETH</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">$8,291</div>
            <div className="text-green-500">+0.25%</div>
          </div>
          <div className="text-gray-400">Litecoin - ITL</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">$3,291</div>
            <div className="text-red-500">-2.05%</div>
          </div>
          <div className="text-gray-400">Cardano - ADA</div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="text-lg font-bold">BTC Prices</div>
        <div className="h-32 bg-gray-100 flex items-center justify-center">
          {btcPrice ? (
            <span className="text-2xl">${btcPrice}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="text-lg font-bold">Live Market</div>
          <ul className="mt-4">
            <li className="flex justify-between items-center mb-2">
              <div>Ethereum</div>
              <div className="text-green-500">+14.02%</div>
              <div>39,786 USD</div>
            </li>
            <li className="flex justify-between items-center mb-2">
              <div>Bitcoin</div>
              <div className="text-green-500">+4.02%</div>
              <div>21,786 USD</div>
            </li>
            <li className="flex justify-between items-center mb-2">
              <div>Litecoin</div>
              <div className="text-red-500">-4.02%</div>
              <div>9,786 USD</div>
            </li>
            <li className="flex justify-between items-center mb-2">
              <div>Cardano</div>
              <div className="text-green-500">+0.02%</div>
              <div>4,786 USD</div>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="text-lg font-bold">Transactions</div>
          <ul className="mt-4">
            <li className="flex justify-between items-center mb-2">
              <div>Ethereum</div>
              <div>Received</div>
              <div>24,102</div>
              <div>Today, 19:30</div>
            </li>
            <li className="flex justify-between items-center mb-2">
              <div>Bitcoin</div>
              <div>Buy</div>
              <div>4,157</div>
              <div>Today, 14:32</div>
            </li>
            <li className="flex justify-between items-center mb-2">
              <div>Bitcoin</div>
              <div>Buy</div>
              <div>64,784</div>
              <div>Today, 13:50</div>
            </li>
            <li className="flex justify-between items-center mb-2">
              <div>Litecoin</div>
              <div>Buy</div>
              <div>14,265</div>
              <div>Today, 09:38</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
