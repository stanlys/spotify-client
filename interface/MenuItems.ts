import MusicTracks from "@mui/icons-material/LibraryMusic";
import HomeIcon from "@mui/icons-material/Home";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

export const MENU_ITEMS = [
  {
    text: "MAIN",
    icon: HomeIcon,
    link: "/",
  },
  {
    text: "Track list",
    icon: AudiotrackIcon,
    link: "tracks",
  },
  {
    text: "Albums",
    icon: MusicTracks,
    link: "albums",
  },
];
