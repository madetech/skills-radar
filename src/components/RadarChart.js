import RadarContainer from "./Radar";
import { RadarConsumer } from "./RadarProvider";
import SaveImage from "./SaveImage";
import Slider from "./Slider";
import Upload from "./Upload";

function RadarChart() {
  return (
    <RadarConsumer>
      {({ state }) => (
        <div className="chart-container">
          <div>
            <div className="radar-chart">
              <RadarContainer />
              <SaveImage />
              <Upload />
            </div>
          </div>
          <div className="sliders">
            {Object.entries(state.data.sliderDetails).map(
              ([skill, descriptors], index) => {
                return (
                  <Slider
                    key={`slider-${index}`}
                    skill={skill}
                    index={index}
                    descriptors={descriptors}
                  />
                );
              }
            )}
          </div>
        </div>
      )}
    </RadarConsumer>
  );
}
export default RadarChart;
