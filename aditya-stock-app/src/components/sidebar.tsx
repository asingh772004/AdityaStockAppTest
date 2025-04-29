import React from 'react';

interface SidebarProps {
  indexNames: string[];
  selectedIndex: string | null;
  onSelect: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ indexNames, selectedIndex, onSelect }) => {
  return (
    <div className="w-1/4 p-4 border-r border-slate-700 bg-slate-800">
      <h2 className="text-lg font-semibold mb-4 text-cyan-400">Indices</h2>
      <ul>
        {indexNames.map((name) => (
          <li
            key={name}
            className={`cursor-pointer py-2 px-3 rounded hover:bg-slate-700 ${
              name === selectedIndex ? 'bg-cyan-500 text-white font-semibold' : 'text-gray-300'
            }`}
            onClick={() => onSelect(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
