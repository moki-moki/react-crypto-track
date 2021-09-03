import { useEffect, useState } from "react";
import cryptoApi from "../api/cryptoApi";

const CoinDetailData = ({ id }) => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await cryptoApi.get(`/coins/markets`, {
        params: {
          vs_currency: "usd",
          ids: id,
        },
      });
      setCoinData(res.data);
      console.log(res.data);
    };
    getData();
    console.log(coinData);
  }, []);
  return (
    <>
      <h2 className="header">{id.toUpperCase()} Price and Market Status</h2>
      <table>
        <tbody>
          {coinData.map((j) => {
            return (
              <>
                <tr>
                  <th className="thName">Name:</th>
                  <td>{j.name}</td>
                </tr>
                <tr>
                  <th className="thName">{j.symbol.toUpperCase()} Price:</th>
                  <td>${j.current_price}</td>
                </tr>
                <tr>
                  <th className="thName">Market Cap Rank:</th>
                  <td>{j.market_cap_rank}</td>
                </tr>
                <tr>
                  <th className="thName">Market Cap:</th>
                  <td>${j.market_cap.toLocaleString()}</td>
                </tr>
                <tr>
                  <th className="thName">Market Cap Change 24h</th>
                  <td>{j.market_cap_change_24h}</td>
                </tr>
                <tr>
                  <th className="thName">24h Low/24h High:</th>
                  <td>
                    ${j.low_24h.toLocaleString()}
                    <span className="lowHighLine">/</span>$
                    {j.high_24h.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <th className="thName">Circulating Supply:</th>
                  <td>{j.circulating_supply.toLocaleString()}</td>
                </tr>
                <tr>
                  <th className="thName">Total Volume:</th>
                  <td>{j.total_volume.toLocaleString()}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CoinDetailData;
