import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  { name: "2019", Pass: 79,  },
  { name: "2020", Pass: 85,  },
  { name: "2021", Pass: 80, },
  { name: "2022", Pass: 78,  },
  { name: "2023", Pass: 74,  },
  { name: "2024", Pass: 88,  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Overall Result (2019 to 2024)</h1>
      <h2>Computer</h2>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
          >
            {/* Grid lines for better readability */}
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />

            <XAxis dataKey="name" tick={{ fill: "#ebebeb", fontSize: 14 }} />
            <YAxis tick={{ fill: "#ebebeb", fontSize: 14 }} />

            {/* Enhanced tooltip for better clarity */}
            <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} />

            {/* Updated colors for better contrast */}
            <Bar dataKey="Pass" fill="#4CAF50" barSize={30} />
            <Bar dataKey="Fail" fill="#E91E63" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
