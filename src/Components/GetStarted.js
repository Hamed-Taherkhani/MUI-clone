import {
  Alert,
  AlertTitle,
  Box,
  Button,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import "./css/GetStarted.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import CopyAllRoundedIcon from "@mui/icons-material/CopyAllRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";

function GetStarted() {
  const [isCopied, setIsCopied] = useState(false);
  const [isSnackOpen, setIsSnackOpen] = useState(false);

  const copyDataToClipboard = (e) => {
    navigator.clipboard
      .writeText("npm install @mui/material @emotion/react @emotion/styled")
      .then(() => {
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch(() => {
        setIsSnackOpen(true);
      });
  };

  return (
    <Box
      className="Get-started-root"
      display="flex"
      flexDirection="column"
      gap={1}
      sx={{ Button: { textTransform: "none", color: "#fff" } }}
    >
      <Snackbar
        autoHideDuration={6000}
        open={isSnackOpen}
        onClose={() => setIsSnackOpen(false)}
      >
        <Alert
          severity="error"
          title=""
          action={
            <IconButton onClick={() => setIsSnackOpen(false)}>
              <CloseRoundedIcon sx={{ color: "#5f2120" }} />
            </IconButton>
          }
        >
          <AlertTitle>Was not copied !!</AlertTitle>
          Please make sure you allow{" "}
          <span style={{ fontWeight: "700" }}>clipboard permission</span>.
        </Alert>
      </Snackbar>

      <Button endIcon={<NavigateNextRoundedIcon />} variant="contained">
        Get started
      </Button>

      <Button
        variant="outlined"
        onClick={copyDataToClipboard}
        endIcon={
          isCopied ? (
            <DoneRoundedIcon sx={{ color: "rgb(51, 153, 255)" }} />
          ) : (
            <CopyAllRoundedIcon sx={{ color: "#fff" }} />
          )
        }
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography className="npm-start" color="#b2bac2" fontSize="0.8rem">
          npm install @mui/material @emotion/react @emotion/styled
        </Typography>
      </Button>
    </Box>
  );
}

export default GetStarted;
