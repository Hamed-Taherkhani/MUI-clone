import React from "react";
import { Box } from "@mui/system";
import TabsContainer from "./TabsContainer";
import { Alert, Button, TextField } from "@mui/material";

function ProductionReadyComponents() {
  const sizes = {
    tabs: [{ label: "Small" }, { label: "Medium" }, { label: "Large" }],
    panels: [
      {
        children: (
          <Button variant="contained" size="small">
            Add To cart
          </Button>
        ),
        title: "Button",
      },
      {
        children: (
          <Button variant="contained" size="medium">
            Add To cart
          </Button>
        ),
        title: "Button",
      },
      {
        children: (
          <Button variant="contained" size="large">
            Add To cart
          </Button>
        ),
        title: "Button",
      },
    ],
  };
  const alert = {
    tabs: [{ label: "Standard" }, { label: "Filled" }, { label: "Outlined" }],
    panels: [
      {
        children: <Alert variant="standard">Check out this alert!</Alert>,
        title: "Alert",
      },
      {
        children: <Alert variant="filled">Check out this alert!</Alert>,
        title: "Alert",
      },
      {
        children: <Alert variant="outlined">Check out this alert!</Alert>,
        title: "Alert",
      },
    ],
  };
  const textField = {
    tabs: [{ label: "Standard" }, { label: "Filled" }, { label: "Outlined" }],
    panels: [
      {
        children: (
          <TextField
            variant="standard"
            label="Username"
            defaultValue="Default-Value"
          />
        ),
        title: "Text Field",
      },
      {
        children: <TextField variant="filled" label="Username" />,
        title: "Text Field",
      },
      {
        children: <TextField variant="outlined" label="Username" />,
        title: "Text Field",
      },
    ],
  };

  return (
    <Box
      border="1px solid rgba(194, 224, 255, 0.08)"
      borderRadius="10px"
      overflow="hidden"
    >
      <TabsContainer tabs={sizes.tabs} panels={sizes.panels} />
      <TabsContainer
        sx={{ border: "1px solid rgba(194, 224, 255, 0.08)" }}
        tabs={alert.tabs}
        panels={alert.panels}
      />
      <TabsContainer
        sx={{
          ".MuiInput-root, .MuiInputLabel-root": {
            color: "#fff",
          },
          ".MuiInput-root::before, .MuiOutlinedInput-notchedOutline , .MuiFilledInput-root::before":
            {
              borderColor: "#fff",
            },
        }}
        tabs={textField.tabs}
        panels={textField.panels}
      />
    </Box>
  );
}

export default ProductionReadyComponents;
