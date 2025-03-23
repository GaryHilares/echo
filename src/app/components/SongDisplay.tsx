import { JSX } from "react";
import { SongData } from "./SongCard";
import Box from "@mui/material/Box";

function SongDisplay({ song }: { song: SongData }): JSX.Element {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <div>
        <img
          alt={`Image for ${song.name}`}
          src={song.url}
          width="300"
          height="300"
          style={{ objectFit: "cover" }}
        />
      </div>
    </Box>
  );
}

export { SongDisplay };
