import { JSX } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

interface SongData {
  name: string;
  artist: string;
  url: string;
}

/**
 * @brief Pure component that displays a song's information in a card.
 * @param props The details of the song and how component should be displayed.
 * @return Card rendering of the song.
 */
function SongCard({
  song,
  sx,
}: {
  song: SongData;
  sx?: { [key: string]: string };
}): JSX.Element {
  return (
    <Card variant="outlined" sx={sx}>
      <CardMedia
        component="img"
        height="150"
        image={song.url}
        alt={`Image for song ${song.name}`}
      />
      <CardContent>
        <Typography variant="h1" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
          {song.name}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem" }}>
          {song.artist}
        </Typography>
      </CardContent>
    </Card>
  );
}

export { SongData, SongCard };
