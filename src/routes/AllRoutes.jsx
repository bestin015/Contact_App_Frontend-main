import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import ContactsPage from "../pages/ContactsPage";
import PrivateRoute from "./PrivateRoute";
export default function AllRoutes() {

    return <Routes>
        <Route path="/" element={<PrivateRoute><Homepage/></PrivateRoute>}></Route>
        <Route path="/register" element={<SignupPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/Contacts" element={<PrivateRoute><ContactsPage/></PrivateRoute>}></Route>
    </Routes>
}