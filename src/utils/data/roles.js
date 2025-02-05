import oneLoginRoles from "./OneLogin.json";
import madeTech from "./TechArchAttributes.json";
import assessment from "./assessment.json";

export const roles = {
  madeTech,
  others: [oneLoginRoles, assessment],
};
