import Likert from "react-likert-scale";

import HoverLikertSlider from "./HoverLikertSlider";
import { RadarConsumer } from "./RadarProvider";

function Slider({ skill, index, descriptors }) {
  const descriptorsInOrder = Object.keys(descriptors);

  const sliderTemplate = {
    question: skill,
    responses: descriptorsInOrder.map((d, i) => ({ value: i + 1, text: d })),
    layout: "stacked",
    style: { alignItems: "center" },
  };

  return (
    <RadarConsumer>
      {({ state, dispatch }) => (
        <HoverLikertSlider skill={skill} descriptors={descriptors}>
          <Likert
            key={skill}
            onChange={(val) => {
              state.data.datasets[state.data.you].data[index] = val.value;
              dispatch({ type: "update", data: state.data });
            }}
            {...sliderTemplate}
          />
        </HoverLikertSlider>
      )}
    </RadarConsumer>
  );
}

export default Slider;
