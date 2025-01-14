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

const datasets = [...parsedRoles(defaultRoles.RoleLevels), yourDataset];

export const YOU = datasets.length - 1;

export const ChartData = {
  // Labels is used for the graph so generate it from the JSON
  labels: Object.keys(defaultRoles.RoleData),
  sliderDetails: defaultRoles.RoleData,
  datasets,
};
