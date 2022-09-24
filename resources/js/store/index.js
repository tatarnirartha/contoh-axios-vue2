import Vue from "vue";
import Vuex from "vuex";

import example from "./modules/example/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		example
	},
});
