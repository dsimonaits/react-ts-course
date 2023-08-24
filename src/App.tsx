import { createBrowserRouter } from "react-router-dom";
import UserPage from "./pages/UsersPage";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";

const App = createBrowserRouter([
  {
    path: "/react-ts-userCards",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <UserPage />,
      },
    ],
  },
]);

export default App;
