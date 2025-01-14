import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import "./App.css";
import RadarChart from "./components/RadarChart";
import { RadarProvider } from "./components/RadarProvider.js";
Chart.register(
  ArcElement,
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  LineElement,
  RadarController,
  RadialLinearScale,
  Tooltip,
  Filler,
  Legend
);

function App() {
  return (
    <RadarProvider>
      <h2 style={{ textAlign: "center" }}>Skills Radar</h2>

      <div className="App">
        <RadarChart />
      </div>
    </RadarProvider>
  );
}

export default App;
