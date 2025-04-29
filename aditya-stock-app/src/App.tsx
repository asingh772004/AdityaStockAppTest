import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import ChartDisplay from './components/chartDisplay';
import { loadCSVData, IndexData } from './utils/csvParser';

const App: React.FC = () => {
  const [data, setData] = useState<IndexData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<string | null>(null);

  useEffect(() => {
    loadCSVData().then(setData).catch(console.error);
  }, []);

  const indexNames = Array.from(new Set(data.map((d) => d.index_name)));
  const filteredData = selectedIndex ? data.filter((d) => d.index_name === selectedIndex) : [];

  return (
    <div className="flex h-screen font-sans">
      <Sidebar
        indexNames={indexNames}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />
      <ChartDisplay data={filteredData} />
    </div>
  );
};

export default App;
