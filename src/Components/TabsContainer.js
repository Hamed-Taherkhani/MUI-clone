import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TabPanel from "./TabPanel";

function TabsContainer({ tabs, panels, sx }) {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: "#0a1929",
        ".MuiTabs-root .MuiButtonBase-root": {
          color: "rgb(178, 186, 194)",
          textTransform: "none",
          fontSize: "0.8rem",

          "&[aria-selected = true]": {
            color: "rgb(51, 153, 255)",
          },
        },
        ...sx,
      }}
    >
      <TabsSection tabs={tabs} value={value} setValue={setValue} />

      {panels.map((panel, i) => (
        <TabPanel index={i} value={value}>
          <Card text={panel.title}>{panel.children}</Card>
        </TabPanel>
      ))}
    </Box>
  );
}

const Card = ({ children, text }) => {
  return (
    <Box
      height={220}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow="1"
      >
        {children}
      </Box>
      <Typography padding=" 1rem">{text}</Typography>
    </Box>
  );
};

const TabsSection = ({ tabs, value, setValue }) => {
  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs onChange={handleTabs} value={value}>
      {tabs.map((tab, i) => (
        <Tab key={i} label={tab.label} />
      ))}
    </Tabs>
  );
};

export default TabsContainer;
