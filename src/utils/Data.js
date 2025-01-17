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

const parsedRoles = (rolesFromJson) => {
  const roles = Object.keys(rolesFromJson).map((key) => {
    return {
      ...defaultTemplate,
      label: key,
      data: rolesFromJson[key].data,
      backgroundColor: rolesFromJson[key].backgroundColor,
      borderColor: rolesFromJson[key].color,
      pointBackgroundColor: rolesFromJson[key].color,
      pointHoverBorderColor: rolesFromJson[key].color,
    };
  });

  const yourData = {
    ...yourDataset,
    data: Array(roles[0].data.length).fill(0),
  };

  return [...roles, yourData];
};

export const calculateNumOfAttributes = (roleData) =>
  Object.keys(Object.entries(roleData)[0][1]).length;

export const ChartData = (roles) => {
  const datasets = parsedRoles(roles.RoleLevels);

  return {
    you: datasets.length - 1,
    title: roles.title,
    labels: Object.keys(roles.RoleData),
    sliderDetails: roles.RoleData,
    datasets,
  };
};
