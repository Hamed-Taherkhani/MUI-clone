import { Button, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LinksList from "../Components/LinksList";
import { LOGO } from "./../Assets/svg";

function Footer() {
  return (
    <Box component="footer" padding="2rem 1rem">
      <Logo />
      <KeepUpToDate />
      <Links />
    </Box>
  );
}

const Logo = () => (
  <Box component="a" href="/" display="block" marginBottom={1.5}>
    {LOGO}
  </Box>
);

const KeepUpToDate = () => {
  return (
    <Box>
      <Typography component="h3">Keep up to date</Typography>
      <Typography color="#b2bac2" fontSize="0.9rem" lineHeight="1rem">
        Join our newsletter for regular updates. <strong>No spam ever</strong>
      </Typography>

      <Box component="form" marginTop={3}>
        <Typography fontSize="0.8rem" color="#b2bac2">
          Enter your email:
        </Typography>

        <Box display="flex" columnGap={1}>
          <Box
            component="input"
            placeholder="example@email.com"
            required
            type="email"
            border="1px solid #1e4976"
            padding="0 0.5rem"
            color="#fff"
            sx={{
              backgroundColor: "#071b2f",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#1e4976",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const Links = () => {
  const linksList = [
    {
      title: "Products",
      links: [
        {
          text: "MUI Core",
          path: "#",
        },
        {
          text: "MUI X",
          path: "#",
        },
        {
          text: "Templates",
          path: "#",
        },
        {
          text: "Design kits",
          path: "#",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          text: "Material Icons",
          path: "#",
        },
        {
          text: "Free templates",
          path: "#",
        },
        {
          text: "Components",
          path: "#",
        },
        {
          text: "Customization",
          path: "#",
        },
        {
          text: "Theming",
          path: "#",
        },
      ],
    },
    {
      title: "Explore",
      links: [
        {
          text: "Documentation",
          path: "#",
        },
        {
          text: "Store",
          path: "#",
        },
        {
          text: "Blog",
          path: "#",
        },
        {
          text: "Showcase",
          path: "#",
        },
        {
          text: "Roadmap",
          path: "#",
        },
        {
          text: "Languages",
          path: "#",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          text: "About",
          path: "#",
        },
        {
          text: "Vision",
          path: "#",
        },
        {
          text: "Careers",
          path: "#",
        },
        {
          text: "Support",
          path: "#",
        },
        {
          text: "Privacy policy",
          path: "#",
        },
        {
          text: "Contact us",
          path: "#",
        },
      ],
    },
  ];

  return (
    <Box
      component="ul"
      padding=" 1rem 0"
      marginTop={3}
      display="flex"
      flexWrap="wrap"
      rowGap={3}
    >
      {linksList.map(({ title, links }, i) => (
        <LinksList
          component="li"
          key={i}
          title={title}
          links={links}
          sx={{ width: "50%" }}
        />
      ))}
    </Box>
  );
};

export default Footer;
