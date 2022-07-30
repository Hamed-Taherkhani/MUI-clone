import React from "react";
import "./css/Block.css";
import { Typography } from "@mui/material";
import IsRender from "./IsRender";

function Block({ title, description, summary, bg, children }) {
  return (
    <div
      className="block"
      style={{
        backgroundColor: bg,
      }}
    >
      <IsRender target={title}>
        <Typography component="h2" color="rgb(51, 153, 255)">
          {title}
        </Typography>
      </IsRender>

      <IsRender target={description}>
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
      </IsRender>

      <IsRender target={summary}>
        <Typography color="#b2bac2">{summary}</Typography>
      </IsRender>

      <IsRender target={children}>
        <div className="children">{children}</div>
      </IsRender>
    </div>
  );
}

export default Block;
