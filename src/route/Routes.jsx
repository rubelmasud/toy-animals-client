import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/Main/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import AllAnimal from "../Pages/AllAnimals/AllAnimal";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ToyDetails from "../Components/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/allAnimal', element: <AllAnimal></AllAnimal> },
            { path: '/addToy', element: <AddToy></AddToy> },
            { path: '/myToy', element: <MyToys></MyToys> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/details/:id', element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute> },
        ]
    },
]);

export default router;