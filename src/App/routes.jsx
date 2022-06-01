import React from "react";
import UserRoute from "./routes/userRoute.jsx";
import AuthRoute from "./routes/authRoute.jsx";

export default function Routes() {
    
    const token = localStorage.getItem('token');
    return (
        <div>
            {!!token ? <UserRoute /> : <AuthRoute />}
        </div>   
    )  
}