import { JSX } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";

interface Event {
  name: string;
  url: string;
}

function EventList({ events }: { events: Event[] }): JSX.Element {
  return (
    <Box>
      <Typography
        variant="h1"
        style={{ fontSize: "1.5rem", fontWeight: "bold" }}
      >
        Related events
      </Typography>
      <List>
        {events.map((event, idx) => (
          <ListItem key={idx}>
            <ListItemButton component="a" href={event.url}>
              <ListItemText>{event.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export { EventList };
