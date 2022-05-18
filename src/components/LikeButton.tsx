import React, { useState, useEffect, useRef, useContext } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { ThemeContext } from "../App";
const LikeButton: React.FC = () => {
  const likeRef = useRef(0);
  const didMountRef = useRef(false);
  const domRef = useRef<HTMLInputElement>(null);
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const theme = useContext(ThemeContext);
  const style = {
    color: theme.color,
    background: theme.background,
  };
  // const positions = useMousePosition();
  useEffect(() => {
    console.log("run", like);
    document.title = `点击了 ${like}`;
  }, [like]);
  function handleAlertClick() {
    setTimeout(() => {
      alert("you clicked on  " + likeRef.current);
    }, 3000);
  }
  useEffect(() => {
    if (didMountRef.current) {
      console.log("this is updated");
    } else {
      didMountRef.current = true;
    }
  });
  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus();
    }
  });
  // const [obj, setObj] = useState({ like: 0, on: true });
  return (
    <>
      {/* <p>
        X:{positions.x} , Y:{positions.y}
      </p> */}
      <input type="text" ref={domRef} />
      <button
        style={style}
        onClick={() => {
          setLike(like + 1);
          likeRef.current++;
        }}
      >
        {like}👍
      </button>
      <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
      <button onClick={handleAlertClick}>click me</button>
    </>
  );
};

export default LikeButton;
