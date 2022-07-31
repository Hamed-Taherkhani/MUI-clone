import { Link, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import IsRender from "./IsRender";

function LinksList({ title, links, component, sx }) {
  return (
    <Box component={component} sx={sx}>
      <IsRender target={title}>
        <Typography component="h3">{title}</Typography>
      </IsRender>

      <List disablePadding>
        {links.map((link, i) => (
          <ListItem key={i} disablePadding>
            <Link
              padding="0.4rem 0"
              display="block"
              width="100%"
              href={link.path}
              sx={{
                textDecoration: "none",

                ".text": {
                  transition: "300ms ease",
                },

                "&:hover .text": {
                  color: "rgb(51, 153, 255)",
                },
              }}
            >
              <IsRender target={link.icon}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  {link.icon}
                </Box>
              </IsRender>

              <IsRender target={link.text}>
                <Typography className="text" color="#b2bac2" fontSize="0.9rem">
                  {link.text}
                </Typography>
              </IsRender>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default LinksList;
