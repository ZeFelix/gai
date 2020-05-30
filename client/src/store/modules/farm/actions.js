import actionsType from "./actionsType";

export function initialFarm(data) {
  return {
    type: actionsType.INITIAL_FARM,
    payload: {
      data
    }
  };
}

export function farmChange(id) {
  return {
    type: actionsType.FARM_CHANGE,
    payload: {
      id
    }
  };
}
