import { FC } from "react";

export const Loader: FC<{ currentColor?: string }> = ({
  currentColor = "white",
}) => (
  <svg version="1.1" id="Layer_1" viewBox="0 0 100 100" width={299} height={50}>
    <rect
      fill={currentColor}
      width="3"
      height="100"
      transform="translate(0) rotate(180 3 50)"
    >
      <animate
        attributeName="height"
        attributeType="XML"
        dur="1s"
        values="30; 100; 30"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x="17"
      fill={currentColor}
      width="3"
      height="100"
      transform="translate(0) rotate(180 20 50)"
    >
      <animate
        attributeName="height"
        attributeType="XML"
        dur="1s"
        values="30; 100; 30"
        repeatCount="indefinite"
        begin="0.1s"
      />
    </rect>
    <rect
      x="40"
      fill={currentColor}
      width="3"
      height="100"
      transform="translate(0) rotate(180 40 50)"
    >
      <animate
        attributeName="height"
        attributeType="XML"
        dur="1s"
        values="30; 100; 30"
        repeatCount="indefinite"
        begin="0.3s"
      />
    </rect>
    <rect
      x="60"
      fill={currentColor}
      width="3"
      height="100"
      transform="translate(0) rotate(180 58 50)"
    >
      <animate
        attributeName="height"
        attributeType="XML"
        dur="1s"
        values="30; 100; 30"
        repeatCount="indefinite"
        begin="0.5s"
      />
    </rect>
    <rect
      x="80"
      fill={currentColor}
      width="3"
      height="100"
      transform="translate(0) rotate(180 76 50)"
    >
      <animate
        attributeName="height"
        attributeType="XML"
        dur="1s"
        values="30; 100; 30"
        repeatCount="indefinite"
        begin="0.1s"
      />
    </rect>
  </svg>
);

export default Loader;
