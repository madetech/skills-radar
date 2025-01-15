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
import SkillsSelector from "./components/SkillsSelector";
import logo from "./logo.png";
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
      <h1 style={{ textAlign: "center" }}>
        <img src={logo} alt="Made Tech's logo." className="logo" />
        Skills Radar
      </h1>

      <div className="App">
        <div>
          <SkillsSelector />
        </div>
        <RadarChart />
      </div>
    </RadarProvider>
  );
}

export default App;
