import { createBrowserRouter } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import UserPage from "./pages/UserPage";
import "src/styles/fonts.css";

const App = createBrowserRouter([
  {
    path: "/react-ts-userCards",
    element: <MainLayout />,
    children: [
      {
        path: "/react-ts-userCards",
        element: <UsersPage />,
      },
      {
        path: "/react-ts-userCards/user/:id",
        element: <UserPage />,
      },
    ],
  },
]);

export default App;
