import React, { useState, useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const positions = useMousePosition();
  useEffect(() => {
    console.log("run", like);
    document.title = `点击了 ${like}`;
  }, [like]);
  // const [obj, setObj] = useState({ like: 0, on: true });
  return (
    <>
      <p>
        X:{positions.x} , Y:{positions.y}
      </p>
      <button onClick={() => setLike(like + 1)}>
        {like}👍{positions.x}
      </button>
      <button onClick={() => setOn(!on)}>
        {on ? "ON" : "OFF"} -- {positions.y}
      </button>
    </>
  );
};

export default LikeButton;
