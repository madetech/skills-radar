import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { RadarConsumer } from "./RadarProvider";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Upload = () => {
  const readFile = (file, dispatch) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (e) => {
      const content = e.target.result;
      dispatch({ type: "changed", data: JSON.parse(content) });
    };
  };

  const onFileChange = (event, dispatch) => {
    readFile(event.target.files[0], dispatch);
  };

  return (
    <RadarConsumer>
      {({ dispatch }) => (
        <div style={{ marginTop: "20px" }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload JSON
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => onFileChange(event, dispatch)}
              accept="application/json"
            />
          </Button>
        </div>
      )}
    </RadarConsumer>
  );
};

export default Upload;
