import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

function Card({
  component,
  href,
  title,
  body,
  startIcon,
  endIcon,
  logo,
  isLink,
  children,
}) {
  return (
    <Paper
      className="Card-root"
      variant="outlined"
      component={component}
      href={href}
      sx={{
        display: "flex",
        gap: 2,
        width: "100%",
        border: "1px solid rgb(51 153 255 / 19%)",
        backgroundColor: "rgb(19, 47, 76)",
        color: "inherit",
        padding: "1rem",
        borderRadius: 3,
      }}
    >
      {logo && (
        <Box
          className="left"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "50px",
              height: "auto",
            }}
            src={logo}
            alt={title}
          />
        </Box>
      )}

      <div className="right">
        <Box className="title" sx={{ display: "flex", gap: 1 }}>
          {startIcon && <span className="icon">{startIcon}</span>}
          <Typography fontWeight="500">{title}</Typography>
          {isLink && (
            <span className="icon">
              <LaunchRoundedIcon
                sx={{ fill: "rgb(51, 153, 255)", width: "17px" }}
              />
            </span>
          )}
        </Box>

        <Typography marginTop="0.5rem" color="#b2bac2" fontSize="0.9rem">
          {body}
        </Typography>

        {children}
      </div>
    </Paper>
  );
}

export default Card;
