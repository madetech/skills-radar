import Likert from "react-likert-scale";

import HoverLikertSlider from "./HoverLikertSlider";
import { RadarConsumer, useData } from "./RadarProvider";
import { useEffect, useState } from "react";

function Slider({ skill, index, descriptors }) {
  const [key, setKey] = useState(0)
  const descriptorsInOrder = Object.keys(descriptors);

  const ctx = useData();

  // A bit of a hack to force re-rendering when the global state has been updated
  // properly. This functional React component is entirely unaware of the global
  // state, and so we `useEffect` with the narrow state dependency to ensure it is
  // rendered *only* when that state has changed.
  useEffect(() => {
    setKey(key+1);
    // Intentionally disabling the warning here because if we add `key` to the
    // list of dependencies, it will never stop rendering (given how we set the key)
    // inside the `useEffect` method!!)
    // eslint-disable-next-line
  }, [ctx.state.data.datasets[ctx.state.data.you].data[index]])

  const sliderTemplate = {
    question: skill,
    responses: descriptorsInOrder.map((d, i) => ({ 
      value: i + 1, 
      text: d, 
      // The dataset data sets 0 as unset option, and 1-5 as the selected option
      checked: ctx.state.data.datasets[ctx.state.data.you].data[index] - 1 === i
    })),
    layout: "stacked",
    style: { alignItems: "center" },
  };

  return (
    <RadarConsumer>
      {({ state, dispatch }) => (
        <HoverLikertSlider skill={skill} descriptors={descriptors}>
          <Likert
            key={skill + key}
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
