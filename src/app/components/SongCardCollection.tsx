import { JSX } from "react";
import { SongCard, SongData } from "./SongCard";

/**
 * @brief Pure component that produces the given thingy.
 * @param param0 Songs to be displayed.
 * @returns A rendering of the songs in the given collection.
 */
function SongCardCollection({ songs }: { songs: SongData[] }): JSX.Element {
  return (
    <>
      {songs.map((song, idx) => (
        <SongCard
          key={idx}
          song={song}
          sx={{ width: "12.5%", float: "left", margin: "1% 2.5%" }}
        />
      ))}
    </>
  );
}

export { SongCardCollection };
