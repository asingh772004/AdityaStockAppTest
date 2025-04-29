import React from 'react';

interface SidebarProps {
  indexNames: string[];
  selectedIndex: string | null;
  onSelect: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ indexNames, selectedIndex, onSelect }) => {
  return (
    <div className="w-1/4 p-4 border-r border-gray-300">
      <h2 className="text-xl font-bold mb-4">Indices</h2>
      <ul>
        {indexNames.map((name) => (
          <li
            key={name}
            className={`cursor-pointer py-2 px-3 rounded hover:bg-blue-100 ${
              name === selectedIndex ? 'bg-blue-200 font-semibold' : ''
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
