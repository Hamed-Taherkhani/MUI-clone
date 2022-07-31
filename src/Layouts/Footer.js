import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <Box component="footer" padding="2rem 1rem">
      <KeepUpToDate />
    </Box>
  );
}

const KeepUpToDate = () => {
  return (
    <Box>
      <Typography component="h3">Keep up to date</Typography>
      <Typography color="#b2bac2" fontSize="0.9rem" lineHeight="1rem">
        Join our newsletter for regular updates. <strong>No spam ever</strong>
      </Typography>

      <Box component="form" marginTop={2}>
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

export default Footer;
