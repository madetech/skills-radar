import defaultRoles from "./data/TechArchAttributes.json";

const defaultTemplate = {
  label: "Job Title",
  data: [],
  fill: true,
  hidden: true,
  backgroundColor: "rgba(255, 99, 132, 0.2)",
  borderColor: "rgb(255, 99, 132)",
  borderWidth: 2,
  pointBackgroundColor: "rgb(255, 99, 132)",
  pointBorderColor: "#fff",
  pointHoverBackgroundColor: "#fff",
  pointHoverBorderColor: "rgb(255, 99, 132)",
};

const yourDataset = {
  label: "You",
  // These values change when you use the tool.
  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  fill: true,
  backgroundColor: "rgba(0, 172, 50, 0.5)",
  borderColor: "rgb(0, 172, 50)",
  borderWidth: 3,
  pointBackgroundColor: "rgb(0, 172, 50)",
  pointBorderColor: "#fff",
  pointHoverBackgroundColor: "#fff",
  pointHoverBorderColor: "rgb(0, 172, 50)",
};

const parsedRoles = (roles) => {
  return Object.keys(roles).map((key) => {
    return {
      ...defaultTemplate,
      label: key,
      data: roles[key].data,
      backgroundColor: roles[key].backgroundColor,
      borderColor: roles[key].color,
      pointBackgroundColor: roles[key].color,
      pointHoverBorderColor: roles[key].color,
    };
  });
};

export const ChartData = (roles = defaultRoles) => {
  const datasets = [...parsedRoles(roles.RoleLevels), yourDataset];

  return {
    you: datasets.length - 1,
    title: roles.title,
    // Labels is used for the graph so generate it from the JSON
    labels: Object.keys(roles.RoleData),
    sliderDetails: roles.RoleData,
    datasets,
  };
};
