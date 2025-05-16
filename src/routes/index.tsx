import { createBrowserRouter } from "react-router";
import { RoutePaths } from "./routePaths";
import Splash from "../pages/splash";
import SignUpPage from "../pages/sign-up";
import OnboardingPage from "../pages/onboarding";
import VerifyOtpPage from "../pages/verify-otp";
import LoginPage from "../pages/login";
import KickArcade from "../pages/kick-arcade";
import DashboardLayout from "../layout";
import VerificationPage from "../pages/verificationPage";
import WelcomePage from "../pages/welcome";

export const router = createBrowserRouter([
  {
    path: RoutePaths.ROOT,
    element: <Splash />,
  },
  {
    path: RoutePaths.LOGIN,
    element: <LoginPage />,
  },
  {
    path: RoutePaths.SIGNUP,
    element: <SignUpPage />,
  },
  {
    path: RoutePaths.ONBOARDING,
    element: <OnboardingPage />,
  },
  {
    path: RoutePaths.VERIFICATION,
    element: <VerificationPage />,
  },
  {
    path: RoutePaths.WELCOME,
    element: <WelcomePage />,
  },
  {
    path: RoutePaths.VERIFYOTP,
    element: <VerifyOtpPage />,
  },
  {
    path: RoutePaths.ROOT,
    element: <DashboardLayout />,
    children: [
      {
        path: RoutePaths.KICKARCADE,
        element: <KickArcade />,
      },
      {
        path: RoutePaths.KICKTRIVIA,
        element: <h1>KICK TRIVIA</h1>,
      },
      {
        path: RoutePaths.LEADERBOARD,
        element: <h1>LEADER BOARD</h1>,
      },
      {
        path: RoutePaths.WINCASH,
        element: <h1>WIN CASH</h1>,
      },
      {
        path: RoutePaths.INVITEAFRIEND,
        element: <h1>INVITE A FRIEND</h1>,
      },
      {
        path: RoutePaths.SUPPORT,
        element: <h1>SUPPORT</h1>,
      },
    ],
  },
]);
