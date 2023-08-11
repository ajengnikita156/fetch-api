import { createStore } from "vuex";
import product from "./modules/product";
import kategori from "./modules/kategori";
import auth from "./modules/auth";
import surah from "./modules/surah";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    product,
    kategori,
    auth,
    surah,
  },
});

export default store;