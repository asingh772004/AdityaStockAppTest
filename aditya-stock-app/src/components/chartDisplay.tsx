import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface IndexData {
  index_name: string;
  index_date: string;
  open_index_value: number;
  high_index_value: number;
  low_index_value: number;
  closing_index_value: number;
  points_change: number;
  change_percent: number;
  volume: number;
  turnover_rs_cr: number;
  pe_ratio: number;
  pb_ratio: number;
  div_yield: number;
}

interface ChartDisplayProps {
  selectedIndex: string | null;
  data: IndexData[];
}

const valueOptions: { key: keyof IndexData; label: string }[] = [
  { key: 'open_index_value', label: 'Open' },
  { key: 'high_index_value', label: 'High' },
  { key: 'low_index_value', label: 'Low' },
  { key: 'closing_index_value', label: 'Close' },
  { key: 'points_change', label: 'Points Change' },
  { key: 'change_percent', label: 'Change %' },
  { key: 'volume', label: 'Volume' },
  { key: 'turnover_rs_cr', label: 'Turnover (Cr)' },
  { key: 'pe_ratio', label: 'P/E Ratio' },
  { key: 'pb_ratio', label: 'P/B Ratio' },
  { key: 'div_yield', label: 'Dividend Yield' },
];

const ChartDisplay: React.FC<ChartDisplayProps> = ({ selectedIndex, data }) => {
  const [selectedMetric, setSelectedMetric] = useState<keyof IndexData>('closing_index_value');

  const filteredData = useMemo(
    () => data.filter((d) => d.index_name === selectedIndex),
    [data, selectedIndex]
  );

  const chartData = useMemo(() => {
    return {
      labels: filteredData.map((d) => d.index_date),
      datasets: [
        {
          label: valueOptions.find((v) => v.key === selectedMetric)?.label || '',
          data: filteredData.map((d) => d[selectedMetric]),
          borderColor: '#1DCD9F',
          backgroundColor: 'rgba(29, 205, 159, 0.2)',
        },
      ],
    };
  }, [filteredData, selectedMetric]);

  if (!selectedIndex || filteredData.length === 0) return <div>Select an index to view data.</div>;

  return (
    <div className="chart-area">
      <div style={{ marginBottom: '1rem' }}>
        <select
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value as keyof IndexData)}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            backgroundColor: '#1b1b1b',
            color: 'white',
            border: '1px solid #1DCD9F',
          }}
        >
          {valueOptions.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <Line data={chartData} />
    </div>
  );
};

export default ChartDisplay;
