import React from "react";
import { Paper, Typography } from "@mui/material";

function Card({ icon, title, body }) {
  return (
    <Paper
      className="Card-root"
      variant="outlined"
      sx={{
        border: "1px solid rgb(51 153 255 / 19%)",
        backgroundColor: "rgb(19, 47, 76)",
        color: "inherit",
        padding: "1rem",
        borderRadius: 3,
      }}
    >
      <div className="title">
        <span className="icon">{icon}</span>
        <Typography fontWeight="500">{title}</Typography>
      </div>

      <Typography marginTop="0.5rem" color="#b2bac2" fontSize="0.9rem">
        {body}
      </Typography>
    </Paper>
  );
}

export default Card;
