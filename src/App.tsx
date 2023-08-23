import { createBrowserRouter } from "react-router-dom";
import UserPage from "./pages/UsersPage";

const App = createBrowserRouter([
  {
    path: "/react-ts-userCards",
    element: <UserPage />,
  },
]);

export default App;
