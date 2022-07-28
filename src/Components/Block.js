import React from "react";
import "./css/Block.css";
import { Typography } from "@mui/material";

function Block({ title, description, summary, bg, children }) {
  return (
    <div
      className="block"
      style={{
        backgroundColor: bg,
      }}
    >
      <Typography component="h2" color="rgb(51, 153, 255)">
        {title}
      </Typography>
      <Typography
        fontSize="1.6rem"
        lineHeight="2rem"
        fontWeight="700"
        margin="1rem 0"
        sx={{
          strong: {
            color: "rgb(51, 153, 255)",
          },
        }}
      >
        {description}
      </Typography>
      {summary && <Typography color="#b2bac2">{summary}</Typography>}

      {children !== undefined && <div className="children">{children}</div>}
    </div>
  );
}

export default Block;
