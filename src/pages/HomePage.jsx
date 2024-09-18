import React from 'react';
import { LineChart, PieChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, Cell } from 'recharts';

const data = [
  { year: 1901, population: 17552 },
  { year: 1911, population: 15141 },
  { year: 1921, population: 18833 },
  { year: 1931, population: 25236 },
  { year: 1941, population: 33364 },
  { year: 1951, population: 44204 },
  { year: 1961, population: 52685 },
  { year: 1971, population: 59714 },
  { year: 1981, population: 64431 },
  { year: 1991, population: 89625 },
  { year: 2001, population: 129894 },
  { year: 2011, population: 172878 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#f5f5f5', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];

const HomePage = () => {
  return ( 
   
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
       
      {/* Line Chart */}
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="year" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="population" stroke="#8884d8" />
      </LineChart>

      {/* Pie Chart */}
      <PieChart width={400} height={400}>
        <Pie 
          data={data} 
          dataKey="population" 
          nameKey="year" 
          cx="50%" 
          cy="50%" 
          outerRadius={80} 
          fill="#8884d8" 
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      
    </div>
  );
};

export default HomePage;