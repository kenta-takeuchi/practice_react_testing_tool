import { Provider } from "react-redux";
import { useStore } from "../store";
import RenderInput from "../components/RenderInput";
import FrameworkList from "../components/FrameworkList";
import UseEffectRender from "../components/UseEffectRender";
import MockServer from "../components/MockServer";
import Redux from "../components/Redux";
import CustomHooks from "../components/CustomHooks";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  const outputConsole = (text) => {
    console.log(text);
  };

  const data = [
    {
      id: 1,
      item: "React",
    },
    {
      id: 2,
      item: "Angular",
    },
    {
      id: 3,
      item: "Vue",
    },
  ];

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <RenderInput outputConsole={outputConsole}></RenderInput>
      <FrameworkList frameworks={data} />
      <UseEffectRender />
      <MockServer />
      <Redux />
      <CustomHooks />
    </Provider>
  );
}
