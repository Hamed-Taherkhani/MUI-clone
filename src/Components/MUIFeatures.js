import { List, ListItem } from "@mui/material";
import React from "react";
import Card from "./Card";
import InvertColorsTwoToneIcon from "@mui/icons-material/InvertColorsTwoTone";
import HandymanIcon from "@mui/icons-material/Handyman";
import ArticleIcon from "@mui/icons-material/Article";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";

function MUIFeatures() {
  const cardsInfo = [
    {
      icon: <InvertColorsTwoToneIcon />,
      title: "Timeless aesthetics",
      body: "Build beautiful UIs with ease. Start with Google's Material Design, or create your own sophisticated theme.",
    },
    {
      icon: <AccessibilityNewRoundedIcon />,
      title: "Intuitive customization",
      body: "Our components are as flexible as they are powerful. You always have full control over how they look and behave.",
    },
    {
      icon: <ArticleIcon />,
      title: "Unrivaled documentation",
      body: "The answer to your problem can be found in our documentation. How can we be so sure? Because our docs boast over 2,000 contributors.",
    },
    {
      icon: <HandymanIcon />,
      title: "Dedicated to accessibility",
      body: "We believe in building for everyone. That's why accessibility is one of our highest priorities with every new feature we ship.",
    },
  ];

  return (
    <List
      className="Mui-features-list"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        ".icon": {
          width: 20,
          transform: "scale(0.85)",

          ".MuiSvgIcon-root": {
            color: "rgb(51, 153, 255)",
          },
        },
      }}
    >
      {cardsInfo.map(({ icon, title, body }, i) => (
        <ListItem disablePadding key={i}>
          <Card title={title} body={body} startIcon={icon} />
        </ListItem>
      ))}
    </List>
  );
}

export default MUIFeatures;
