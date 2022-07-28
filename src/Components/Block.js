import { Typography } from "@mui/material";
import React from "react";

function Block({ title, description, summary }) {
  return (
    <div className="block">
      <Typography component="h2">{title}</Typography>
      <Typography>{description}</Typography>
      <Typography>{summary}</Typography>
    </div>
  );
}

export default Block;
