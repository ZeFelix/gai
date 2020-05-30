import actionsType from "./actionsType";

export function initialGeojson(data) {
  return {
    type: actionsType.INITIAL_GEOJSON,
    payload: {
      data
    }
  };
}
