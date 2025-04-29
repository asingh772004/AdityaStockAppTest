import React from 'react';
import { TrendingUp } from 'lucide-react'; // Importing Lucide icon
import '../layout.css';

const Header: React.FC = () => (
  <div className="header flex items-center gap-2">
    <TrendingUp size={32} className="text-green-500" /> {/* Adding the stock-related icon */}
    <span>Aditya's Stock Visualizer</span>
  </div>
);

export default Header;
