import React from "react";
import { ChartData } from "../utils/Data";

const RadarContext = React.createContext();

function radarReducer(state, action) {
  switch (action.type) {
    case "changed": {
      return { data: ChartData(action.data) };
    }
    case "update": {
      return { data: state.data };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function RadarProvider({ children }) {
  const [state, dispatch] = React.useReducer(radarReducer, {
    data: ChartData(),
  });
  const value = { state, dispatch };
  return (
    <RadarContext.Provider value={value}>{children}</RadarContext.Provider>
  );
}

function useData() {
  const context = React.useContext(RadarContext);
  if (context === undefined) {
    throw new Error("useData must be used within a RadarProvider");
  }
  return context;
}

function RadarConsumer({ children }) {
  return (
    <RadarContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error("RadarConsumer must be used within a RadarProvider");
        }
        return children(context);
      }}
    </RadarContext.Consumer>
  );
}

export { RadarConsumer, RadarContext, RadarProvider, useData };
