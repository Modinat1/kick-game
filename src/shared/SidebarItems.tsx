import { RoutePaths } from "../routes/routePaths";

import {
  KickArcadeIcon,
  KickTriviaIcon,
  InviteAFriendIcon,
  WinCashIcon,
  SupportIcon,
  LeaderBoardIcon,
  ProfileIcon,
  SettingsIcon,
} from "../assets/svg";

export const sidebarRoutes = [
  {
    name: "Kick Arcade",
    icon: <KickArcadeIcon />,
    path: RoutePaths.KICKARCADE,
  },
  {
    name: "Kick Trivia",
    icon: <KickTriviaIcon />,
    path: RoutePaths.KICKTRIVIA,
  },
  {
    name: "Leaderboard",
    icon: <LeaderBoardIcon />,
    path: RoutePaths.LEADERBOARD,
  },
  {
    name: "Win & Cash",
    icon: <WinCashIcon />,
    path: RoutePaths.WINCASH,
  },
  {
    name: "Invite a friend",
    icon: <InviteAFriendIcon />,
    path: RoutePaths.INVITEAFRIEND,
  },
  {
    name: "Support",
    icon: <SupportIcon />,
    path: RoutePaths.SUPPORT,
  },
];

export const sidebarProfileRoutes = [
  {
    name: "Profile",
    icon: <ProfileIcon />,
    path: "#",
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
    path: "#",
  },
];
