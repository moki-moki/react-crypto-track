import { useParams } from "react-router";
import ChartCoinDetail from "./ChartCoinDetail";
import CoinDetailData from "./CoinDetailData";

const CoinDetail = () => {
  const { id } = useParams();

  return (
    <>
      <ChartCoinDetail id={id} />
      <CoinDetailData id={id} />
    </>
  );
};

export default CoinDetail;
