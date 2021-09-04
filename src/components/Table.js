import { useEffect, useState } from "react";
import cryptoApi from "../api/cryptoApi";
import Pagination from "./Pagination";
import CoinList from "./CoinList";
import { Loader } from "./Loader";

const Table = () => {
  const [coinList, setCoinList] = useState([]);
  //page state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  //loader
  const [isLoading, setIsLoading] = useState(true);

  //pagination logic
  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const currentInstanceOfPage = coinList.slice(
    indexOfFirstPage,
    indexOfLastPage
  );

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      const res = await cryptoApi.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          per_page: 250,
          page: currentPage,
          price_change_percentage: "1h, 24h",
        },
      });
      setCoinList(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <table>
            <thead>
              <th>Rank</th>
              <th>Coin</th>
              <th>Price</th>
              <th>1h</th>
              <th>24h</th>
              <th>Mkt Cap</th>
            </thead>
            <tbody>
              <CoinList coinList={currentInstanceOfPage} />
            </tbody>
          </table>
          <Pagination
            postPerPage={itemsPerPage}
            paginate={paginate}
            totalPost={coinList.length}
          />
        </>
      )}
      ;
    </>
  );
};

export default Table;
