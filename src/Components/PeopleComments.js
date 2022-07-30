import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  Tabs,
  Tab,
  Typography,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/system";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import {
  DOCKER_BLUE,
  GUSTAVO_AVATAR,
  JEAN_AVATAR,
  JOONA_AVATAR,
  LOGGI,
  UNITY_BLUE,
} from "../Assets/Images/import";

function PeopleComments() {
  return (
    <div className="People-comments-component">
      <Comments />
      <MUILibraryAnalytics />
    </div>
  );
}

const Comments = () => {
  const [value, setValue] = useState(0);

  const comments = [
    {
      text: "\"MUI offers a wide variety of high quality components that have allowed us to ship features faster. MUI has been used by more than a hundred engineers in our organization. What's more, MUI's well architected customization system has allowed us to differentiate ourselves in the marketplace.\"",
      avatar: JOONA_AVATAR,
      name: "Joona Rahko",
      job: "Staff Software Engineer",
      logo: UNITY_BLUE,
    },
    {
      text: "\"MUI looks great and lets us deliver fast, thanks to their solid API design and documentation - it's refreshing to use a component library where you get everything you need from their site rather than Stack Overflow. We think the upcoming version, with extra themes and customizability, will make MUI even more of a game changer. We're extremely grateful to the team for the time and effort spent maintaining the project.\"",
      avatar: JEAN_AVATAR,
      name: "Jean-Laurent de Morlhon",
      job: "VP of Engineering",
      logo: DOCKER_BLUE,
    },
    {
      text: '"After much research on React component libraries, we decided to ditch our in-house library for MUI, using its powerful customization system to implement our Design System. This simple move did a rare thing in engineering: it lowered our maintenance costs while enhancing both developer and customer experience. All of this was done without sacrificing the organization\'s branding and visual identity."',
      avatar: GUSTAVO_AVATAR,
      name: "Gustavo de Paula",
      job: "Specialist Software Engineer",
      logo: LOGGI,
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = ({ index, value, text, avatar, name, job, logo }) => {
    return (
      <>
        {index === value && (
          <Box className={`tap-panel-${index}`} height="400px">
            <Typography padding="20px 0">{text}</Typography>

            <Box display="flex" gap={2}>
              <Avatar
                src={avatar}
                alt={`${name} - ${job}`}
                sx={{ width: 56, height: 56, border: "3px solid #99CCF3" }}
              />

              <Box>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  columnGap={1}
                  marginBottom={1}
                >
                  <Typography whiteSpace="nowrap">{name},</Typography>
                  <Typography color="#b2bac2">{job}</Typography>
                </Box>

                {<img src={logo} alt="" />}
              </Box>
            </Box>
          </Box>
        )}
      </>
    );
  };

  return (
    <div className="Comments-component">
      <Box
        className="navigating"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          className="btns"
          sx={{
            display: "flex",
            gap: 1.5,
            Button: {
              borderRadius: "50%",
              minWidth: "40px",
              minHeight: "40px",
              width: "40px",
              height: "40px",
              color: "#fff",

              "&[disabled]": {
                color: "#fff",
                opacity: 0.5,
              },
            },
          }}
        >
          <Button
            variant="outlined"
            onClick={(e) => handleChange(e, value - 1)}
            disabled={value === 0 && true}
          >
            <NavigateBeforeRoundedIcon />
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => handleChange(e, value + 1)}
            disabled={value === comments.length - 1 && true}
          >
            <NavigateNextRoundedIcon />
          </Button>
        </Box>

        <Tabs
          indicatorColor="transparent"
          value={value}
          onChange={handleChange}
          sx={{
            button: {
              padding: 0,
              width: "20px",
              minWidth: "20px",

              ".circle": {
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#99CCF3",
              },
            },
          }}
        >
          <Tab
            label={
              <span
                className="circle"
                style={{
                  background: value === 0 && "rgb(51, 153, 255)",
                }}
              ></span>
            }
          />
          <Tab
            label={
              <span
                className="circle"
                style={{
                  background: value === 1 && "rgb(51, 153, 255)",
                }}
              ></span>
            }
          />
          <Tab
            label={
              <span
                className="circle"
                style={{
                  background: value === 2 && "rgb(51, 153, 255)",
                }}
              ></span>
            }
          />
        </Tabs>
      </Box>

      {comments.map(({ text, avatar, name, job, logo }, i) => (
        <TabPanel
          value={value}
          index={i}
          text={text}
          avatar={avatar}
          name={name}
          job={job}
          logo={logo}
        />
      ))}
    </div>
  );
};

const MUILibraryAnalytics = () => {
  const data = [
    {
      title: "Weekly downloads on npm",
      count: "3.2M",
    },
    {
      title: "Stars on GitHub",
      count: "78K",
    },
    {
      title: "Open-source contributors",
      count: "2.4k",
    },
    {
      title: "Followers on Twitter",
      count: "17k",
    },
  ];

  return (
    <List
      className="MUI-library-analytics"
      disablePadding
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {data.map(({ title, count }, i) => (
        <ListItem
          disablePadding
          key={i}
          sx={{
            display: "block",
            width: "calc(50% - 15px)",
            borderLeft: "1px solid #99ccf354",
            paddingLeft: 2,
          }}
        >
          <Typography fontSize="1.5rem" fontWeight="700" color="#99CCF3">
            {count}
          </Typography>
          <Typography>{title}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default PeopleComments;
