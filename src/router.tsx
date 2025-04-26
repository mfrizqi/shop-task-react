import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { ProtectedRoute } from "./auths/auth";

import Register from "./page/Register";
import Login from "./page/Login";
import TaskManager from "./page/TaskManager";
import Shop from "./page/Shop";
import Profile from "./page/Profile";
import Header from "./components/Header";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TaskManager />,

    },
    {
        path: "/shop",
        element: <Shop />,

    },
    {
        path: 'auth/register',
        element: <Register />
    },
    {
        path: 'auth/login',
        element: <Login />
    },
    {
        path: '/app',
        element: (
            <ProtectedRoute>
                <Header />
                <Profile />
            </ProtectedRoute>
        )
    },
    {
        path: '*',
        element: (<Navigate to="/" replace />)
    }
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};