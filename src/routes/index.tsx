import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import CoinPage from "../pages/CoinPage";
import AnalyzePage from "../pages/AnalyzePage";
import NewsPage from "../pages/NewsPage";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"/home",
                element:<HomePage />,
            },
            {
                path:"/coin",
                element:<CoinPage />,
            },
            {
                path:"/analyze",
                element:<AnalyzePage />,
            },
            {
                path:"/news",
                element:<NewsPage />,
            },
        ]
    }
])

export default router