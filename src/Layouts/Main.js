import React from "react";
import "./css/Main.css";
import {
  AMAZON,
  NASA,
  SPOTIFY,
  NETFLIX,
  OUTLINED_MORE,
  UNITY,
  SHUTTERSTOCK,
} from "../Assets/svg";
import { Typography, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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
  <div className="introduction">
    <div className="container">
      <div className="text">
        <Typography
          textAlign="center"
          fontWeight="700"
          fontSize="2.3rem"
          lineHeight="2.3rem"
          component="h1"
        >
          <strong style={{ color: "rgb(51, 153, 255)" }}>Move faster</strong>{" "}
          with intuitive React UI tools
        </Typography>

        <Typography textAlign="center" color="#b2bac2">
          MUI offers a comprehensive suite of UI tools to help you ship new
          features faster. Start with Material UI, our fully-loaded component
          library, or bring your own design system to our production-ready
          components.
        </Typography>
      </div>

      <div className="get-started flex">
        <Button
          className="get-started-btn"
          component="a"
          variant="contained"
          endIcon={OUTLINED_MORE}
        >
          Get started
        </Button>

        <Button
          variant="outlined"
          endIcon={<ContentCopyIcon sx={{ color: "#b2bac2" }} />}
          className="copy-npm-start-btn"
        >
          <Typography color="#b2bac2" fontSize="0.6rem">
            npm install @mui/material @emotion/react @emotion/styled
          </Typography>
        </Button>
      </div>
    </div>
  </div>
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
