import { FaDiscord, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  // { label: "Gallery", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Event", href: "/event" },
  { label: "Schedule", href: "/schedule" },
  { label: "Contact", href: "/contact" },
  // { label: "Team", href: "/team" },
  
] as const;

export const LINKS = {
  sourceCode: "https://github.com",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://discord.com",
    icon: FaDiscord,
  },
  {
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    href: "https://twitch.com",
    icon: FaTwitch,
  },
] as const;
