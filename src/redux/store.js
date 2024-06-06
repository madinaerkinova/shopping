import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
// import { saveState } from "../lib/storage";
import { saveState } from "../lib/storage";
import productReducer, { totalPriceData } from "./reducer/product-reducer";
import {
  addProduct,
  deleteProduct,
  toggleAnmount,
} from "./reducer/product-reducer";
const storageMiddlware = createListenerMiddleware();

storageMiddlware.startListening({
  matcher: isAnyOf(addProduct, deleteProduct, toggleAnmount),
  effect: (action, api) => {
    api.dispatch(totalPriceData());
  },
});

export const store = configureStore({
  reducer: {
    product: productReducer,
  },

  middleware: (defaultMiddleware) => {
    return defaultMiddleware().prepend(storageMiddlware.middleware);
  },
});

store.subscribe(() => {
  saveState("product", store.getState().product);
});
