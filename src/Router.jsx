import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Home from "./page/Home";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        
      ]
    },
    {
      path:'/contact',
      element:<ContactUs/>
    }
    
  ]);
  export default router