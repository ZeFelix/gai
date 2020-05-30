import produce from "immer";

import actionType from "./actionsType";

const initialState = {
  data: [],
  farmSelected: {}
};

export default function schedule(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actionType.INITIAL_FARM:
        draft.data = action.payload.data;
        break;

      case actionType.FARM_CHANGE:
        state.data.forEach(farm => {
          if (action.payload.id === farm.farm_id) {
            draft.farmSelected = farm;
          }
        });
        break;

      default:
    }
  });
}
