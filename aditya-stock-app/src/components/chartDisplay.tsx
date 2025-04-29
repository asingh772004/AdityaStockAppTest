import React from 'react';
import { Line } from 'react-chartjs-2';
import { IndexData } from '../utils/csvParser';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

interface ChartDisplayProps {
  data: IndexData[];
}

const ChartDisplay: React.FC<ChartDisplayProps> = ({ data }) => {
  if (data.length === 0) {
    return <div className="w-3/4 p-4 text-gray-400">Select an index to view chart.</div>;
  }

  const labels = data.map((entry) => entry.index_date);
  const closingValues = data.map((entry) => entry.closing_index_value);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Closing Index Value',
        data: closingValues,
        fill: false,
        borderColor: '#06b6d4',
        backgroundColor: '#06b6d4',
        tension: 0.3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { labels: { color: 'white' } },
    },
    scales: {
      x: { ticks: { color: 'white' } },
      y: { ticks: { color: 'white' } },
    },
  };

  return (
    <div className="w-3/4 p-4 bg-slate-900">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ChartDisplay;
