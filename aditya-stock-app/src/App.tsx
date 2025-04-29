import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import ChartDisplay from './components/chartDisplay';
import { loadCSVData, IndexData } from './utils/csvParser';
import Header from './components/header';

const App: React.FC = () => {
  const [data, setData] = useState<IndexData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<string | null>(null);

  useEffect(() => {
    loadCSVData().then(setData).catch(console.error);
  }, []);

  const indexNames = Array.from(new Set(data.map((d) => d.index_name)));
  const filteredData = selectedIndex ? data.filter((d) => d.index_name === selectedIndex) : [];

  return (
    <div className="bg-slate-900 text-white h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar
          indexNames={indexNames}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />
        <ChartDisplay data={filteredData} />
      </div>
    </div>
  );
};

export default App;
