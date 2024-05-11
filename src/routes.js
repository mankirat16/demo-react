import Blogs from "./components/pages/Blogs";
import Courses from "./components/pages/Courses";
import Body from "./components/pages/landingPage";
import CheckResume from "./components/pages/resume-checker";

export const routes = [
  {
    path: "*",
    element: <Body />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "about-us",
    element: null,
  },
  {
    path: "/check-resume-score",
    element: <CheckResume />,
  },
];
