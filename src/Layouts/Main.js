import React from "react";
import "./css/Main.css";
import {
  AMAZON,
  NASA,
  SPOTIFY,
  NETFLIX,
  UNITY,
  SHUTTERSTOCK,
} from "../Assets/svg";
import { Box, Typography } from "@mui/material";
import GetStarted from "../Components/GetStarted";
import BlocksList from "../Components/BlocksList";

function Main() {
  return (
    <div className="root-main">
      <Introduction />
      <FamousCompany />
      <BlocksList />
    </div>
  );
}

const Introduction = () => (
  <Box
    className="introduction"
    display="flex"
    justifyContent="center"
    alignItems="center"
    padding="2.7rem 1rem "
  >
    <Box maxWidth="500px">
      <Box>
        <Typography
          textAlign="center"
          fontWeight="700"
          fontSize="2.8rem"
          lineHeight="3rem"
          component="h1"
        >
          <strong style={{ color: "rgb(51, 153, 255)" }}>Move faster</strong>{" "}
          with intuitive React UI tools
        </Typography>

        <Typography textAlign="center" color="#b2bac2" margin="0.4rem 0 1.3rem">
          MUI offers a comprehensive suite of UI tools to help you ship new
          features faster. Start with Material UI, our fully-loaded component
          library, or bring your own design system to our production-ready
          components.
        </Typography>
      </Box>

      <GetStarted />
    </Box>
  </Box>
);

const FamousCompany = () => {
  const companiesList = [
    {
      logo: SPOTIFY,
      href: "#",
    },
    {
      logo: AMAZON,
      href: "#",
    },
    {
      logo: NASA,
      href: "#",
    },
    {
      logo: NETFLIX,
      href: "#",
    },
    {
      logo: UNITY,
      href: "#",
    },
    {
      logo: SHUTTERSTOCK,
      href: "#",
    },
  ];

  return (
    <div className="famous-company-used-mui">
      <ul className="list flex flex-wrap justify-center">
        {companiesList.map((company, i) => (
          <li key={i} className="item flex justify-center">
            <a href={company.href}>{company.logo}</a>
          </li>
        ))}
      </ul>

      <Typography
        className="text"
        textAlign="center"
        color="#b2bac2"
        fontSize="0.9rem"
      >
        The world's best product teams trust MUI to deliver an unrivaled
        experience for both developers and users.
      </Typography>
    </div>
  );
};

export default Main;
