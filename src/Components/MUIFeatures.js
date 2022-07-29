import { List, ListItem } from "@mui/material";
import React from "react";
import Card from "./Card";

function MUIFeatures() {
  const cardsInfo = [
    {
      icon: "",
      title: "Timeless aesthetics",
      body: "Build beautiful UIs with ease. Start with Google's Material Design, or create your own sophisticated theme.",
    },
    {
      icon: "",
      title: "Intuitive customization",
      body: "Our components are as flexible as they are powerful. You always have full control over how they look and behave.",
    },
    {
      icon: "",
      title: "Unrivaled documentation",
      body: "The answer to your problem can be found in our documentation. How can we be so sure? Because our docs boast over 2,000 contributors.",
    },
    {
      icon: "",
      title: "Dedicated to accessibility",
      body: "We believe in building for everyone. That's why accessibility is one of our highest priorities with every new feature we ship.",
    },
  ];

  return (
    <List
      className="mui-features-list"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {cardsInfo.map(({ icon, title, body }, i) => (
        <ListItem disablePadding key={i}>
          <Card title={title} body={body} endIcon={icon} />
        </ListItem>
      ))}
    </List>
  );
}

export default MUIFeatures;
