import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function LinksList({ title, links, component, sx }) {
  return (
    <Box component={component} sx={sx}>
      <Typography component="h3">{title}</Typography>

      <List disablePadding>
        {links.map((link, i) => (
          <ListItem key={i} disablePadding>
            <Box
              component="a"
              padding="0.4rem 0"
              display="block"
              width="100%"
              href={link.path}
            >
              <Typography color="#b2bac2" fontSize="0.9rem">
                {link.text}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default LinksList;
