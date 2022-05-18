import React, { useState } from "react";
interface IHelloProps {
  message?: string;
}
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);

  // const [obj, setObj] = useState({ like: 0, on: true });
  return (
    <>
      <button onClick={() => setLike(like + 1)}>{like}</button>
      <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
    </>
  );
};

export default LikeButton;
