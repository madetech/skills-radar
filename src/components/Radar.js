import { Radar } from "react-chartjs-2";
import { calculateNumOfAttributes } from "../utils/Data";
import { RadarConsumer } from "./RadarProvider";

function RadarContainer() {
  return (
    <RadarConsumer>
      {({ state }) => {
        return (
          <Radar
            data={state.data}
            options={{
              layout: {
                padding: 10,
              },
              scales: {
                r: {
                  max: calculateNumOfAttributes(state.data.sliderDetails),
                  min: 0,
                  ticks: {
                    stepSize: 1,
                    color: "black",
                    font: {
                      size: 15,
                    },
                  },
                  grid: {
                    color: "gray",
                  },
                  angleLines: {
                    lineWidth: 3,
                    color: "gray",
                  },
                  pointLabels: {
                    padding: 2,
                    font: {
                      size: 12,
                      weight: 800,
                    },
                  },
                },
              },
              tooltips: {
                mode: "single",
                backgroundColor: "#fff",
                bodyColor: "#888",
                titleColor: "#888",
              },
              scale: {
                ticks: {
                  beginAtZero: true,
                  display: false,
                },
              },
              responsive: true,
              maintainAspectRatio: true,
              elements: {
                line: {
                  tension: 0,
                },
              },
              plugins: {
                legend: {
                  onHover: (evt) => {
                    evt.native.target.style.cursor = "pointer";
                  },
                  onLeave: (evt) => {
                    evt.native.target.style.cursor = "default";
                  },
                },
              },
            }}
          />
        );
      }}
    </RadarConsumer>
  );
}

export default RadarContainer;
