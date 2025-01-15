import Likert from "react-likert-scale";

import HoverLikertSlider from "./HoverLikertSlider";
import { RadarConsumer } from "./RadarProvider";

function Slider({ skill, index, descriptors }) {
  const descriptorsInOrder = Object.keys(descriptors);

  const sliderTemplate = {
    question: skill,
    responses: [
      { value: 1, text: descriptorsInOrder[0] },
      { value: 2, text: descriptorsInOrder[1] },
      { value: 3, text: descriptorsInOrder[2] },
      { value: 4, text: descriptorsInOrder[3] },
      { value: 5, text: descriptorsInOrder[4] },
    ],
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
