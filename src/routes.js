import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from './Layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Sales from "./pages/Sales";
import Messages from "./pages/Messages";
import Products from "./pages/JobsManages";
import Users from "./pages/Users";
import Deliveries from "./pages/Deliveries";
import Settings from "./pages/Settings";
import SingleProduct from "./pages/SingleProduct";
import PublicRoutesLayout from "./Layouts/PublicRoutesLayout";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Register from "./pages/Register";
import ManagesJobs from "./pages/JobsManages";
import JobsManages from "./pages/JobsManages";
import AddJobs from "./pages/AddJobs";


export default function Router() {
    return useRoutes([
        {
            path: "/app",
            element: <DashboardLayout />,
            children: [
                { path: "dashboard", element: <Dashboard /> },
                { path: "jobs-manages", element: <JobsManages /> },
                { path: "products", element: <Products /> },
                { path: "products/:productId", element: <SingleProduct /> },
                { path: "messages", element: <Messages /> },
                { path: "users", element: <Users /> },
                { path: "deliveries", element: <Deliveries /> },
                { path: "settings", element: <Settings /> },
                { path: "add-job", element: <AddJobs /> },
            ],
        },
        {
            path: "/",
            element: <PublicRoutesLayout />,
            children: [
                { index: true, element: <Login /> },
                { path: "register", element: <Register /> },
                { path: "page404", element: <Page404 /> },

            ],
        },
        { path: "*", element: <Navigate to="/page404" replace={true} /> },
    ]);
}
// https://wpjobboard.net/kb/managing-job-in-admin-panel/