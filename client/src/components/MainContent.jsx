import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const MainContent = () => {
  const [btcHistory, setBtcHistory] = useState([]);

  useEffect(() => {
    const fetchBtcHistory = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
          {
            params: {
              vs_currency: "usd",
              days: 180,
            },
          }
        );
        const prices = response.data.prices.map((price) => ({
          time: new Date(price[0]).toLocaleDateString(),
          value: price[1],
        }));
        setBtcHistory(prices);
      } catch (error) {
        console.error("Error fetching BTC historical prices:", error);
      }
    };

    fetchBtcHistory();
  }, []);

  const chartData = {
    labels: btcHistory.map((price) => price.time),
    datasets: [
      {
        data: btcHistory.map((price) => price.value),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="flex flex-col p-4 w-full h-full overflow-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 flex-1">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">$40,291</div>
              <div className="text-green-500">+0.25%</div>
            </div>
            <div className="text-gray-400">Bitcoin - BTC</div>
          </div>
          <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">$18,291</div>
              <div className="text-green-500">+0.25%</div>
            </div>
            <div className="text-gray-400">Ethereum - ETH</div>
          </div>
          <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">$8,291</div>
              <div className="text-green-500">+0.25%</div>
            </div>
            <div className="text-gray-400">Litecoin - ITL</div>
          </div>
          <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">$3,291</div>
              <div className="text-red-500">-2.05%</div>
            </div>
            <div className="text-gray-400">Cardano - ADA</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow h-full flex flex-col justify-between">
          <div className="text-lg font-bold">BTC Prices</div>
          <div className="mt-4 flex-1">
            <Line
              data={chartData}
              options={{
                responsive: true,
                scales: {
                  x: {
                    display: true,
                    title: {
                      display: true,
                      text: "Date",
                    },
                  },
                  y: {
                    display: true,
                    title: {
                      display: true,
                      text: "Price (USD)",
                    },
                  },
                },
                plugins: {
                  tooltip: {
                    mode: "index",
                    intersect: false,
                  },
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 flex-1">
        <div className="bg-white p-4 rounded shadow h-full flex flex-col justify-between">
          <div className="text-lg font-bold">Live Market</div>
          <ul className="mt-4 flex-1">
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
        <div className="bg-white p-4 rounded shadow h-full flex flex-col justify-between">
          <div className="text-lg font-bold">Transactions</div>
          <ul className="mt-4 flex-1">
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
