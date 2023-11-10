import { useSelector } from "react-redux"
import LoginPage from "../pages/LoginPage"
import ContactsPage from "../pages/ContactsPage"

export default function PrivateRoute({ children}) {
    const {auth} = useSelector((state)=>state.userReducer)

    if (auth) {
        return <ContactsPage/>
    }

    return <LoginPage/>

}