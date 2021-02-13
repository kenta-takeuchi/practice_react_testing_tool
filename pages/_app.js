import { Provider } from "react-redux";
import { useStore } from "../store";
import RenderInput from "../components/RenderInput";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  const outputConsole = (text) => {
    console.log(text);
  };

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <RenderInput outputConsole={outputConsole}></RenderInput>
    </Provider>
  );
}
