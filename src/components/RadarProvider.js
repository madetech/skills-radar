import React from "react";
import { ChartData } from "../utils/Data";

const RadarContext = React.createContext();

function radarReducer(state, action) {
  switch (action.type) {
    case "upload": {
      const data = ChartData(action.data);
      state.previousData[action.data.title] = {
        data,
      };

      return {
        ...state,
        data,
      };
    }
    case "selected": {
      const { data } = state.previousData[action.title];

      return { ...state, data };
    }
    case "update": {
      return { ...state, data: state.data };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function RadarProvider({ children }) {
  const defaultData = ChartData();

  const [state, dispatch] = React.useReducer(radarReducer, {
    previousData: {
      [defaultData.title]: {
        data: defaultData,
      },
    },
    data: defaultData,
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
