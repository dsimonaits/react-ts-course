import { createBrowserRouter } from "react-router-dom";
import UserPage from "./pages/UsersPage";

const App = createBrowserRouter([
  {
    path: "/",
    element: <UserPage />,
  },
]);

export default App;
