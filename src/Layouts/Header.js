import React, { useState } from "react";
import "./css/Header.css";
import {
  LOGO,
  OUTLINED_BURGER,
  OUTLINED_GITHUB,
  OUTLINED_LIGHT,
  OUTLINED_SEARCH,
} from "./../Assets/svg";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Collapse,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonsList = [
      {
        icon: OUTLINED_SEARCH,
      },
      {
        icon: OUTLINED_GITHUB,
      },
      {
        icon: OUTLINED_LIGHT,
      },
      {
        icon: OUTLINED_BURGER,
        handler: () => {
          // Toggle menu collapse:
          setIsMenuOpen(!isMenuOpen);
        },
      },
    ],
    menuItems = [
      {
        summary: "Products",
        isAccordion: true,
        defaultExpanded: true,
        details: [
          {
            title: "MUI Core",
            text: "Ready-to-use foundational components, free forever.",
          },
          {
            title: "MUI X",
            text: "Advanced and powerful components for complex use-cases.",
          },
          {
            title: "Templates",
            text: "Fully built, out-of-the-box, templates for your application.",
          },
          {
            title: "Design kits",
            text: "Our components available in your favorite design tool.",
          },
        ],
      },
      {
        summary: "Docs",
        isAccordion: true,
        details: [
          {
            title: "Material UI",
            text: "React components that implement Google's Material Design.",
          },
          {
            title: "Jou UI",
            text: "React components for building your design system.",
          },
          {
            title: "MUI Base",
            text: "Unstyled React components and low-level hooks.",
          },
          {
            title: "MUI System",
            text: "CSS utilities for rapidly laying out custom designs.",
          },
          {
            title: "MUI X",
            text: "Advanced and powerful components for complex use cases.",
          },
        ],
      },
      {
        isAccordion: false,
        link: "Pricing",
      },
      {
        isAccordion: false,
        link: "About us",
      },
      {
        isAccordion: false,
        link: "Blog",
      },
    ];

  return (
    <header className="header__  glass">
      <div className="top flex justify-space-between lr-padding align-center">
        <div className="left">{LOGO}</div>

        <ul className="right">
          {buttonsList.map((button, index) => (
            <li key={index}>
              <Button
                variant="outlined"
                sx={{
                  padding: 1,
                  minWidth: 35,
                  minHeight: 35,
                  borderRadius: 3,
                }}
                onClick={button.handler}
              >
                {button.icon}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <Collapse className="menu-container" component="div" in={isMenuOpen}>
        <ul className="menu-items-list">
          {menuItems.map((item, i) =>
            item.isAccordion ? (
              <li key={i} className="item">
                <Accordion defaultExpanded={item.defaultExpanded}>
                  <AccordionSummary
                    expandIcon={
                      <ExpandMore sx={{ fill: "rgb(51, 153, 255)" }} />
                    }
                  >
                    <Typography>{item.summary}</Typography>
                  </AccordionSummary>

                  {item.details.map((detail, j) => (
                    <AccordionDetails key={j}>
                      <a href="#">
                        <Typography className="title">
                          {detail.title}
                        </Typography>
                        <Typography className="text">{detail.text}</Typography>
                      </a>
                    </AccordionDetails>
                  ))}
                </Accordion>
              </li>
            ) : (
              <li key={i} className="item">
                <AccordionDetails>
                  <a href="#">
                    <Typography>{item.link}</Typography>
                  </a>
                </AccordionDetails>
              </li>
            )
          )}
        </ul>
      </Collapse>
    </header>
  );
}

export default Header;
