import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./component/ErrorComponent";

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
    ],
    errorElement: <NotFound />, //에러가 발생했거나 컴포넌트를 못 찾을 때 보여줄 element
  },
]);

export default router;
