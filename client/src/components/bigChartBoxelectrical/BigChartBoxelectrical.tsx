import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./bigChartBoxelectrical.scss";

const data = [
  { name: "2019", Pass: 82,  },
  { name: "2020", Pass: 78,  },
  { name: "2021", Pass: 55,  },
  { name: "2022", Pass: 68,  },
  { name: "2023", Pass: 42, },
  { name: "2024", Pass: 82,  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Overall Result (2019 to 2024)</h1>
      <h2>Electrical</h2>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" tick={{ fill: "#ebebeb", fontSize: 14 }} />
            <YAxis tick={{ fill: "#ebebeb", fontSize: 14 }} />
            <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} />
            <Bar dataKey="Pass" fill="#00C49F" barSize={30} />
            <Bar dataKey="Fail" fill="#FF4444" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
