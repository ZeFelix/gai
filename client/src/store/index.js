import { createStore } from "redux";
import rootRedurcer from "./modules/rootRedurcer";

const store = createStore(rootRedurcer);

export default store;
