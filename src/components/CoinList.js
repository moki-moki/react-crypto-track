import { Link } from "react-router-dom";

const CoinList = ({ coinList }) => {
  return (
    <>
      {coinList.map((c) => {
        if (c.price_change_percentage_1h_in_currency === null) {
          return <td>Currenty NULL</td>;
        }
        return (
          <tr key={c.id}>
            <th scope="row">#{c.market_cap_rank}</th>
            <td>
              <Link to={`/react-crypto-tracker/coinDetails/${c.id}`}>
                <div className="namePictureAlign">
                  <div>
                    <img className="imageSize" alt={c.symbol} src={c.image} />
                  </div>
                  {c.name}
                  <div className="symbol">{c.symbol.toUpperCase()}</div>
                </div>
              </Link>
            </td>
            <td>${c.current_price}</td>
            {c.price_change_percentage_1h_in_currency < 0 ? (
              <td className="redPrecentage">
                {c.price_change_percentage_1h_in_currency.toFixed(2)}%
              </td>
            ) : (
              <td className="greenPrecentage">
                {c.price_change_percentage_1h_in_currency.toFixed(2)}%
              </td>
            )}
            {c.price_change_percentage_24h < 0 ? (
              <td className="redPrecentage">
                {c.price_change_percentage_24h.toFixed(2)}%
              </td>
            ) : (
              <td className="greenPrecentage">
                {c.price_change_percentage_24h.toFixed(2)}%
              </td>
            )}
            <td>${c.market_cap.toLocaleString()}</td>
          </tr>
        );
      })}
    </>
  );
};

export default CoinList;
