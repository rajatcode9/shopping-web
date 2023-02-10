import "@/styles/globals.css";
import { store } from "../store/index";
import { Provider } from "react-redux";
import PrimarySearchAppBar from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PrimarySearchAppBar/>
      <Component {...pageProps} />
    </Provider>
  );
}
