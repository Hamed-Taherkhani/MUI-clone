import React from "react";

function IsRender({ target, children }) {
  return <>{target && children}</>;
}

export default IsRender;
