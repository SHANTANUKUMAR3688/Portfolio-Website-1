 /* eslint-disable react/prop-types */

import { TypeAnimation } from "react-type-animation";

function Animation({ codeColor, codeblock }) {
  return (
    <div className={`w-full flex flex-col gap-2 font-bold font-mono ${codeColor}`}>
      <TypeAnimation
        sequence={[codeblock, 2000, ""]}
        repeat={Infinity}
        cursor={true}
        style={{
          whiteSpace: "pre-line",
          display: "block",
        }}
        omitDeletionAnimation={true}
      />
    </div>
  );
}

export default Animation;
