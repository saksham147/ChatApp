import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';


export default function Profiles() {
    const { id } = useParams();

    function requestSend(event) {
        // event.preventDefault();
        // let res = await fetch("http://localhost:5000/users/add", {
        //     method: "POST",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         request: request,
        //     }),
        // });
        // const data = await res.json();

        // if(data.status === 200){
        toast.success("Success", { autoClose: 3000 });
        // }


    };


   
    return (
        <div className="container">
            <h4>{id}</h4>
            <button onClick={requestSend}>Request</button>
            <ToastContainer />
        </div>
    );
}
