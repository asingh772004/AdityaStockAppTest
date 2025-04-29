import React from 'react';
import '../layout.css';

interface SidebarProps {
  indexNames: string[];
  selectedIndex: string | null;
  onSelect: (index: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ indexNames, selectedIndex, onSelect }) => (
  <div className="sidebar">
    <h3>Indices</h3>
    <ul>
      {indexNames.map((name) => (
        <li
          key={name}
          className={selectedIndex === name ? 'active' : ''}
          onClick={() => onSelect(name)}
        >
          {name}
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
