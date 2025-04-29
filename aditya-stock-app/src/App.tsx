import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { IndexData } from './utils/csvParser';
import Sidebar from './components/sidebar';
import ChartDisplay from './components/chartDisplay';
import Header from './components/header';

const App: React.FC = () => {
  const [data, setData] = useState<IndexData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<string | null>(null);

  useEffect(() => {
    fetch('/dump.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse<IndexData>(csvText, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            setData(results.data.filter(d => d.index_name)); // remove empty rows
          },
        });
      });
  }, []);

  const indexNames = Array.from(new Set(data.map(d => d.index_name)));
  const filteredData = selectedIndex
    ? data.filter(d => d.index_name === selectedIndex)
    : [];

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white">
      <Header />
      <div style={{ display: "flex", gap: "1rem" }}>
        <Sidebar
          indexNames={indexNames}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />
        <ChartDisplay selectedIndex={selectedIndex} data={filteredData} />
      </div>
    </div>
  );
};

export default App;
