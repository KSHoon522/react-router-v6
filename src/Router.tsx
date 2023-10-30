import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./component/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
  //Router를 array 형태로 생성하게 해줌
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />, //Home component가 crash했을 때 보여주는 element
        //다른 컴포넌트를 Home 컴포넌트에서 발생하는 문제로부터 보호해줌
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId", // ./users에 아무것도 보여줄 것이 없으면 이런 식으로 작성
        //아니라면 users 밑에 children을 추가해줘야함
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />, //에러가 발생했거나 컴포넌트를 못 찾을 때 보여줄 element
  },
]);

export default router;
