import type { JSX } from "solid-js";

const Emoji = (props: JSX.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      style={{
        position: "relative",
        height: "1em",
        top: "0.1em",
      }}
      alt={props.alt || "emoji"}
      src={props.src}
      {...props}
    />
  );
};

export default Emoji;
