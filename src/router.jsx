import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Home } from "./pages/home/Home";
import { SearchModal } from "./pages/searchModal/searchModal";
import { ShowDetail } from "./pages/ShowDetail/ShowDetail";
import { My } from "./pages/my/My";
import { Bookmark } from "./pages/my/Bookmark";
import { Calender } from "./pages/my/Calender";
import { Review } from "./pages/my/Review";
import { Setting } from "./pages/my/Setting";
import { CoWrite } from "./pages/community/communityWrite/CoWrite";
import { CoDetail } from "./pages/community/communityDetail/CoDetail";
import { CoEditor } from "./pages/community/communityMain/CoEditor";
import { CoFree } from "./pages/community/communityMain/CoFree";
import { CoHot } from "./pages/community/communityMain/CoHot";
import { CoQna } from "./pages/community/communityMain/CoQna";
import NotFound from "./NotFound";
import { Login } from "./pages/login/Login";
import { Join } from "./pages/login/Join";
import { JoinInput } from "./pages/login/JoinInput";
import { Success } from "./pages/login/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "join_1",
        element: <Join />,
      },
      {
        path: "join_2",
        element: <JoinInput />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "search",
        element: <SearchModal />,
      },
      {
        path: ":detailId",
        element: <ShowDetail />,
      },
      {
        path: "my",
        element: <My />,
      },
      {
        path: "my/bookmark",
        element: <Bookmark />,
      },
      {
        path: "my/calender",
        element: <Calender />,
      },
      {
        path: "my/review",
        element: <Review />,
      },
      {
        path: "my/setting",
        element: <Setting />,
      },
      {
        path: "community/write",
        element: <CoWrite />,
      },
      {
        path: "community/:detailId",
        element: <CoDetail />,
      },
      {
        path: "community/editor",
        element: <CoEditor />,
      },
      {
        path: "community/free",
        element: <CoFree />,
      },
      {
        path: "community",
        element: <CoHot />,
      },
      {
        path: "community/qna",
        element: <CoQna />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;