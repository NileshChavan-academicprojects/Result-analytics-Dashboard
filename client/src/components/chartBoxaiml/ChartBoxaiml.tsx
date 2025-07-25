import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import "./chartBoxaiml.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  const [zoomOut, setZoomOut] = useState(false);

  const handleZoomOut = () => {
    setZoomOut(true);
    setTimeout(() => {
      setZoomOut(false); // Reset after animation
    }, 500);
  };

  return (
    <div className={`chartBox ${zoomOut ? "zoom-out" : ""}`}>
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1 className="h1">{props.number}</h1>
        <Link to="/Aimlresults" style={{ color: props.color }} onClick={handleZoomOut}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip contentStyle={{ background: "transparent", border: "none" }} labelStyle={{ display: "none" }} position={{ x: 10, y: 70 }} />
              <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>
            {props.percentage}%
          </span>
          <span className="duration">DEC 2024</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
