import React from "react";
import { ChartData } from "../utils/Data";
import { roles } from "../utils/data/roles";

const RadarContext = React.createContext();

const lsKeyData = "youData";

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
      localStorage.setItem(lsKeyData, JSON.stringify(state.data.datasets[state.data.you].data));
      return { ...state, data: state.data };
    }
    case "loadFromLocalStorage": {
      const storageData = JSON.parse(localStorage.getItem(lsKeyData));
      if (!storageData || !Array.isArray(storageData)) {
        return state;
      }

      const updatedDatasets = state.data.datasets.map((dataset, index) => 
        index === state.data.you ? { ...dataset, data: storageData } : dataset
      );

      return {
        ...state,
        data: { ...state.data, datasets: updatedDatasets}
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function RadarProvider({ children }) {
  const defaultData = ChartData(roles.madeTech);
  const defaultState = {
    previousData: {
      [defaultData.title]: {
        data: defaultData,
      },
    },
    data: defaultData,
  };

  roles.others.map(ChartData).forEach((roles) => {
    defaultState.previousData[roles.title] = {
      data: roles,
    };
  });

  const [state, dispatch] = React.useReducer(radarReducer, { ...defaultState });
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
