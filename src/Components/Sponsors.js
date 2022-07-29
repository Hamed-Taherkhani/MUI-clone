import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Card from "./Card";
import {
  BIT,
  DIAL,
  GOREAD,
  HEX,
  SUNMATOSOFT,
  TEXTEMALL,
  MEGA,
  TIDELIFT,
  OCTOPUS,
  DOIT,
  ZESTY,
} from "./../Assets/Images/import";

function Sponsors() {
  const diamond = [
      {
        title: "Octopus Deploy",
        body: "A unified DevOps automation platform for your team.",
        isLink: true,
        logo: OCTOPUS,
      },
      {
        title: "Doit International",
        body: "Management platform for Google Cloud and AWS.",
        isLink: true,
        logo: DOIT,
      },
      {
        title: "Zesty.io",
        body: "The only Next.js CMS you need.",
        isLink: true,
        logo: ZESTY,
      },
    ],
    gold = [
      {
        title: "Tidelift",
        body: "A unified DevOps automation platform for your team.",
        isLink: true,
        logo: TIDELIFT,
      },
      {
        title: "Bit",
        body: "A unified DevOps automation platform for your team.",
        isLink: true,
        logo: BIT,
      },
      {
        title: "Text-em-all",
        body: "A unified DevOps automation platform for your team.",
        isLink: true,
        logo: TEXTEMALL,
      },
      {
        title: "CasinoHEX Australia",
        body: "A unified DevOps automation platform for your team.",
        isLink: true,
        logo: HEX,
      },
      {
        title: "SunmatoSoft",
        body: "A unified DevOps automation platform for your team.",
        isLink: true,
        logo: SUNMATOSOFT,
      },
      {
        title: "MegaFamous",
        body: "A unified DevOps automation platform for your team.",
        isLink: true,
        logo: MEGA,
      },
      {
        title: "DialMyCalls",
        body: "A unified DevOps automation platform for your team.",
        isLink: true,
        logo: DIAL,
      },
      {
        title: "Goread.io",
        body: "A unified DevOps automation platform for your team.",
        isLink: true,
        logo: GOREAD,
      },
      {
        title: "Become a sponsor",
        body: "A unified DevOps automation platform for your team.",
        isLink: true,
        logo: "+",
      },
    ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        marginTop: 5,
      }}
    >
      <Box className="diamond-section">
        <Typography
          fontSize="1.5rem"
          fontWeight="500"
          color="rgb(51, 153, 255)"
        >
          Diamond
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          className="diamond-sponsors-list"
        >
          {diamond.map(({ title, body, endIcon, logo, isLink }, i) => (
            <ListItem disablePadding key={i}>
              <Card
                title={title}
                body={body}
                endIcon={endIcon}
                logo={logo}
                isLink={isLink}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box className="gold-section">
        <Typography fontSize="1.5rem" fontWeight="500" color="rgb(222, 165, 0)">
          Gold
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          className="diamond-sponsors-list"
        >
          {gold.map(({ title, body, endIcon, logo, isLink }, i) => (
            <ListItem disablePadding key={i}>
              <Card
                title={title}
                body={body}
                endIcon={endIcon}
                logo={logo}
                isLink={isLink}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Sponsors;
