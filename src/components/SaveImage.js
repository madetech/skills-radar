import Button from "@mui/material/Button";

const SaveImage = () => {
  const download = () => {
    const canvas = document.querySelector(".radar-chart canvas");

    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    link.download = "skills-radar.png";
    link.href = url;
    link.click();
  };

  return (
    <Button variant="contained" onClick={download}>
      Download Skills Radar as an image
    </Button>
  );
};

export default SaveImage;
