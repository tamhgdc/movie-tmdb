import {
  Box,
  ListItemText,
  ListItem,
  List,
  IconButton,
  ListItemButton,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "7rem",
        marginBottom: "1rem",
        color: "gray",
        borderTop: "white solid 1px",
      }}
    >
      <Box
        sx={{
          marginX: "auto",
          display: "flex",
          justifyContent: "space-between",
          paddingY: "1rem",
          maxWidth: "70%",
        }}
      >
        <Box
          sx={{
            maxWidth: 360,
            marginRight: { xl: "7rem", lg: "5rem", md: "1.5rem" },
          }}
        >
          <List>
            {[
              "Audio and Subtitle",
              "Media Center",
              "Security",
              "Contact us",
            ].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={<IconButton aria-label="comment"></IconButton>}
                sx={{ padding: "0" }}
              >
                <ListItemButton sx={{ padding: "0" }}>
                  <ListItemText
                    primary={<Typography variant="body2">{value}</Typography>}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ padding: 0, marginTop: "1rem" }}>
              <Button
                variant="outlined"
                sx={{ borderRadius: 0, color: "gray", borderColor: "gray" }}
              >
                Service Code
              </Button>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            maxWidth: 360,
            marginRight: { xl: "7rem", lg: "5rem", md: "1.5rem" },
          }}
        >
          <List>
            {[
              "Audio Description",
              "Investor Relations",
              "Legal Provisions",
            ].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={<IconButton aria-label="comment"></IconButton>}
                sx={{ padding: "0" }}
              >
                <ListItemButton sx={{ padding: "0" }}>
                  <ListItemText
                    primary={<Typography variant="body2">{value}</Typography>}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            maxWidth: 360,
            marginRight: { xl: "7rem", lg: "5rem", md: "1.5rem" },
          }}
        >
          <List>
            {["Help", "Jobs", "Cookie Preferences"].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={<IconButton aria-label="comment"></IconButton>}
                sx={{ padding: "0" }}
              >
                <ListItemButton sx={{ padding: "0" }}>
                  <ListItemText
                    primary={<Typography variant="body2">{value}</Typography>}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ maxWidth: 360 }}>
          <List>
            {["Gift Cards", "Term of Use", "Corporate Information"].map(
              (value) => (
                <ListItem
                  key={value}
                  disableGutters
                  secondaryAction={
                    <IconButton aria-label="comment"></IconButton>
                  }
                  sx={{ padding: "0" }}
                >
                  <ListItemButton sx={{ padding: "0" }}>
                    <ListItemText
                      primary={<Typography variant="body2">{value}</Typography>}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "70%", marginX: "auto" }}>
        <Typography variant="caption" color="white">
          Copyright © 2022 Movies. ARG17 All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
