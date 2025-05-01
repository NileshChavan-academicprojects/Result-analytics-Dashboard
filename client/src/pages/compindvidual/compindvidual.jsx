import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data1 = [
  { name: "Jan", sales: 4000, profit: 2400 },
  { name: "Feb", sales: 3000, profit: 1398 },
  { name: "Mar", sales: 2000, profit: 9800 },
  { name: "Apr", sales: 2780, profit: 3908 },
  { name: "May", sales: 1890, profit: 4800 },
  { name: "Jun", sales: 2390, profit: 3800 },
  { name: "Jul", sales: 3490, profit: 4300 },
];

const data2 = [
  { name: "Product A", revenue: 5000, expense: 1200 },
  { name: "Product B", revenue: 7000, expense: 2300 },
  { name: "Product C", revenue: 6500, expense: 1900 },
  { name: "Product D", revenue: 8000, expense: 3000 },
  { name: "Product E", revenue: 7200, expense: 2500 },
  { name: "Product F", revenue: 6800, expense: 2700 },
];

export default class Example extends PureComponent {
  render() {
    return (
      <div className="chart-container">
        {/* First Chart (Sales & Profit) */}
        <div className="chart-box">
          <h3 className="chart-title">Computer</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data1} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              <Bar dataKey="profit" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Second Chart (Revenue & Expense) */}
        <div className="chart-box">
          <h3 className="chart-title">Revenue & Expense by Product</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#ff7300" activeBar={<Rectangle fill="red" stroke="black" />} />
              <Bar dataKey="expense" fill="#387908" activeBar={<Rectangle fill="yellow" stroke="green" />} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
