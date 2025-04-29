# Aditya's Stock Visualizer

## Description
Aditya's Stock Visualizer is a React application that displays stock data visualizations from a CSV file. It allows users to interactively explore stock market data, including selecting different stock index metrics to view in a line graph.

## Features
- **Multiple Graph Dropdown**: Users can select from various stock index metrics (such as Open, Close, High, Low, etc.) from a dropdown menu to view in the graph.
- **Zoom and Pan Support**: Users can zoom in/out and pan the graph using mouse scroll and drag gestures.
- **Custom Scrollbars**: A sleek, custom-styled scrollbar for smooth navigation through the sidebar.
- **Responsive Design**: The app is fully responsive, designed to work well on both desktop and mobile.
- **Dark Mode Support**: The app features a dark mode theme, providing a visually pleasant experience for users at night.

## Installation

Follow these steps to set up the project locally:

### Prerequisites
1. Make sure you have the latest version of **Node.js** and **npm** installed.
   - [Node.js Download](https://nodejs.org/)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/aditya-stock-visualizer.git
   ```


2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the project:**
    ```bash
    npm run dev
    ```

The app should now be accessible at http://localhost:5173 in your web browser.

## Project Structure

- `src/`
  - `components/`: Contains reusable UI components such as `Sidebar`, `ChartDisplay`, and `Header`.
  - `utils/`: Includes utility functions like CSV parsing.
  - `App.tsx`: Main application file.
  - `index.tsx`: Entry point for the application.

- `public/`
  - `dump.csv`: The stock data CSV file (you can replace it with your own).

## Libraries Used
- **React**: Frontend framework.
- **Chart.js**: Library for drawing interactive graphs.
- **Lucide React**: For stock-related icons.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Additional Features
- **Dropdown for Metric Selection**: Choose the metric to visualize in the graph, including "Open", "Close", "Volume", and more.
- **Custom Scrollbar**: A styled scrollbar for a clean user experience when scrolling the sidebar.
- **Dark Mode Support**: The app comes with a dark-themed UI for a modern look and feel.
