import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import LikeButton from "./components/LikeButton";
import MouseTracker from "./components/MouseTracker";
import useMousePosition from "./hooks/useMousePosition";
// import withLoader from "./components/withLoader";
import useURLLoader from "./hooks/useURLLoader";

interface IShowResult {
  message: string;
  status: string;
}
interface IThemeProps {
  [key: string]: { color: string; background: string };
}
const themes: IThemeProps = {
  light: {
    color: "#000",
    background: "#eee",
  },
  dark: {
    color: "#fff",
    background: "#222",
  },
};
export const ThemeContext = React.createContext(themes.light);
// const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
//   return (
//     <>
//       <h2>Dog show:{data.status}</h2>
//       <img src={data.message} />
//     </>
//   );
// };
function App() {
  const [show, setShow] = useState(true);
  // const positions = useMousePosition();
  const [data, loading] = useURLLoader(
    "https://dog.ceo/api/breeds/image/random",
    [show]
  );
  const dogResult = data as IShowResult;
  // const WrappedDogShow = withLoader(
  //   DogShow,
  //   "https://dog.ceo/api/breeds/image/random"
  // );
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.light}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <WrappedDogShow /> */}
          {/* <p>
          X:{positions.x} , Y:{positions.y}
        </p>
        <p>
          <button onClick={() => setShow(!show)}>Toggle Tracker</button>
        </p> */}
          {/* {loading ? (
          <p>🐕 读取中... ...</p>
        ) : (
          <img src={dogResult && dogResult.message} />
        )} */}

          <Hello message={"hello daxin"} />
          <LikeButton />
          {/* {show && <MouseTracker />} */}
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
