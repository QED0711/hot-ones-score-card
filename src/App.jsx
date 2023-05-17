import MainContainer from "./components/MainContainer"
import Hey from "./components/Hey";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

if (window.location.pathname === "/reset") {
  window.localStorage.clear();
  window.open(window.location.host, "_self")
}

const router = createBrowserRouter([
  { path: "/", element: <MainContainer /> },
  { path: "/hey", element: <Hey /> },
])

function App() {


  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
