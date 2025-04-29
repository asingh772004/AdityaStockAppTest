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
    return <p className="p-4">No data available.</p>;
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
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="w-3/4 p-4">
      <Line data={chartData} />
    </div>
  );
};

export default ChartDisplay;
