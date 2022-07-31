import { Box, Button, Typography } from "@mui/material";
import "./css/GetStarted.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import CopyAllRoundedIcon from "@mui/icons-material/CopyAllRounded";

function GetStarted() {
  return (
    <Box
      className="Get-started-root"
      display="flex"
      flexDirection="column"
      gap={1}
      sx={{ Button: { textTransform: "none", color: "#fff" } }}
    >
      <Button endIcon={<NavigateNextRoundedIcon />} variant="contained">
        Get started
      </Button>

      <Button
        variant="outlined"
        endIcon={<CopyAllRoundedIcon sx={{ color: "#fff" }} />}
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
