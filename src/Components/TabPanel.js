import React from "react";

function TabPanel({ index, value, children }) {
  return <>{index === value && <>{children}</>}</>;
}

export default TabPanel;
