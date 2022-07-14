// Bizim birden fazla redux tanımımız olacak örneğin user kullanıcıları tanımlamak için redux tanımımız varken sitenin tema tanımını veya dil tanımını çektiğimiz farklı bir dil tanımıda olacak bunları birleştirdiğimiz tek bir yerde configure ettiğimiz ve sonra en dıştaki state componentimize verdiğimiz bir tanım.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // useSelector kullanarak callback ile state'e ulaşmaya çalıştığımızda bize dönen state reducer'ın altındaki tanımlardır. counter gibi.
  },
});
