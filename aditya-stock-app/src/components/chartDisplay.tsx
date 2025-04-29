import React from 'react';
import { Line } from 'react-chartjs-2';
import { IndexData } from '../utils/csvParser';
import '../layout.css';
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

interface Props {
  data: IndexData[];
}

const ChartDisplay: React.FC<Props> = ({ data }) => {
  if (data.length === 0) {
    return <div className="chart-area">Select an index to see its chart.</div>;
  }

  const labels = data.map((d) => d.index_date);
  const closingValues = data.map((d) => d.closing_index_value);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Closing Index',
        data: closingValues,
        borderColor: '#1DCD9F',
        backgroundColor: '#1DCD9F',
        tension: 0.3,
      },
    ],
  };

  const options = {
    plugins: { legend: { labels: { color: 'white' } } },
    scales: {
      x: { ticks: { color: 'white' } },
      y: { ticks: { color: 'white' } },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-area">
      <div style={{ height: '100%', minHeight: '400px' }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartDisplay;
