import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { RadarConsumer, useData } from "./RadarProvider";
import { useEffect } from "react";

const SkillsSelector = () => {
  
  const ctx = useData();

  useEffect(() => {
    ctx.dispatch({type: "loadFromLocalStorage"});
  },
  // Intentionally disabling the warning here because we want to load data only once 
  // when the component mounts
  // eslint-disable-next-line
  []);
  
  return (
    <RadarConsumer>
      {({ state, dispatch }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "25px",
          }}
        >
          <Box sx={{ minWidth: 350 }}>
            <FormControl fullWidth>
              <InputLabel id="json-selector-label">Skills</InputLabel>
              <Select
                labelId="json-selector-label"
                id="json-selector"
                value={state.data.title}
                label="Skills"
                onChange={(e) =>
                  dispatch({ type: "selected", title: e.target.value })
                }
              >
                {Object.keys(state.previousData).map((prevData) => {
                  return (
                    <MenuItem key={prevData} value={prevData}>
                      {prevData}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </div>
      )}
    </RadarConsumer>
  );
};

export default SkillsSelector;
