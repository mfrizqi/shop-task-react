import { createBrowserRouter, RouterProvider } from "react-router";
import { ProtectedRoute } from "./auths/auth";

import Register from "./page/Register";
import Login from "./page/Login";
import TaskManager from "./page/TaskManager";
import NotFound from "./page/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <TaskManager/>,

    },
    {
        path: 'auth/register',
        element: <Register/>
    },
    {
        path: 'auth/login',
        element: <Login/>
    },
    {
        path: '/app',
        element: (
            <ProtectedRoute>
                <div>Profile user</div>
            </ProtectedRoute>
        )
    },
    {
        path:'*',
        element: <NotFound></NotFound>
    }
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};