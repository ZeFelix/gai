import produce from "immer";

import actionType from "./actionsType";

const initialState = {
  data: [],
  geoSelected: {}
};

export default function schedule(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actionType.INITIAL_GEOJSON:
        draft.data = action.payload.data;
        break;

      default:
    }
  });
}
