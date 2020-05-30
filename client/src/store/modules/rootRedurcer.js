import { combineReducers } from "redux";

import farm from "./farm/reducers";
import geojson from "./geojson/reducers";

export default combineReducers({ farm, geojson });
