import React from "react";
import { Box, Button } from "@mui/material";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import GetStarted from "./GetStarted";
import Card from "./Card";

function StartNow() {
  return (
    <Box className="Start-now-root">
      <GetStarted sx={{ padding: "1rem 0 3rem" }} />

      <Box
        className="links-list"
        display="flex"
        flexDirection="column"
        gap={2}
        sx={{
          ".learn-more-btn": {
            textTransform: "none",

            ".MuiButton-endIcon": {
              transition: "200ms ease",
              position: "relative",
              left: "0",
            },

            "&:hover .MuiButton-endIcon": {
              transform: "scale(1.1)",
              left: "2px",
            },
          },
        }}
      >
        <Card
          title="Showcase"
          body="Check out some great examples of MUI's products in action."
          component="a"
          href="#"
        >
          <Button
            className="learn-more-btn"
            component="a"
            endIcon={<NavigateNextRoundedIcon />}
          >
            Learn more
          </Button>
        </Card>
        <Card
          title="Blog"
          body="Read the latest updates about our company and products."
          component="a"
          href="#"
        >
          <Button
            className="learn-more-btn"
            component="a"
            endIcon={<NavigateNextRoundedIcon />}
          >
            Learn more
          </Button>
        </Card>
      </Box>
    </Box>
  );
}

export default StartNow;
