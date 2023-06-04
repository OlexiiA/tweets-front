import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const Layout = () => {
    return (
        <div >
            <NavBar />
            <Outlet />
            <ToastContainer position='bottom-right' />
        </div>
    )
}
