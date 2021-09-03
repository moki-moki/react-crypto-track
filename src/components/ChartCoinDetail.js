import { useEffect, useState } from "react";
import cryptoApi from "../api/cryptoApi";
import Chart from "react-apexcharts";
import { Loader } from "./Loader";

const ChartCoinDetail = ({ id }) => {
  const [series, setSeries] = useState([{ data: [] }]);
  const [days, setDays] = useState("1");
  //loader
  const [isLoading, setIsLoading] = useState(true);

  const chart = {
    options: {
      chart: {
        type: "candlestick",
      },
      title: {
        text: id,
        align: "center",
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            colors: "#fff",
          },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        labels: {
          style: {
            colors: "#fff",
          },
        },
      },
    },
  };

  useEffect(() => {
    const getData = async () => {
      const res = await cryptoApi.get(`/coins/${id}/ohlc?`, {
        params: {
          vs_currency: "usd",
          days: days,
        },
      });

      console.log(res.data);
      const price = await res.data.map((p) => ({
        x: p[0],
        y: [p[1], p[2], p[3], p[4]],
      }));
      setIsLoading(false);
      setSeries([{ data: price }]);
      console.log(series);
    };
    getData();
  }, [days]);

  console.log(days);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Chart
          options={chart.options}
          series={series}
          type="candlestick"
          width="80%"
          height={420}
          align="center"
        />
      )}
      <div className="btns">
        <button className="btn" onClick={() => setDays("1")}>
          24h
        </button>
        <button className="btn" onClick={() => setDays("7")}>
          7d
        </button>
        <button className="btn" onClick={() => setDays("14")}>
          14d
        </button>
        <button className="btn" onClick={() => setDays("30")}>
          30d
        </button>
        <button className="btn" onClick={() => setDays("90")}>
          90d
        </button>
        <button className="btn" onClick={() => setDays("180")}>
          180d
        </button>
        <button className="btn" onClick={() => setDays("365")}>
          365d
        </button>
      </div>
    </div>
  );
};

export default ChartCoinDetail;
