import React, { useState, useEffect } from "react";
import jwt from 'jsonwebtoken';
import { Link, Routes, Route } from "react-router-dom";

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    async function populate(){
        const res = await fetch('http://localhost:5000/users/', {
            headers:{
                'x-access-token':localStorage.getItem('token'),
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        });
        
        const data = await res.json();
        setData(data);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token');
                window.location.href = '/Signin';
            }else{
                populate();
            }
        }

    },[])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(data)
        }
    }
  
  return (
    <div>
        <div>
            <input  placeholder='Search...' onChange={(e) => searchItems(e.target.value)}/>
        </div>
        <h4>dashboard</h4>
        <div>
            {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <div className="card">
                                <div className="card-header">
                                    <Link to={"/profiles/" + item._id}>{item.name}</Link>
                                </div>
                                <div className="card-body">
                                    <p>{item.email}</p>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    data.map((item) => {
                        return (
                            <div className="card">
                                <div className="card-header">
                                    <Link to={"/profiles/" + item._id}>{item.name}</Link>
                                </div>
                                <div className="card-body">
                                    <p>{item.email}</p>
                                </div>
                            </div>
                        )
                    })
                )}

        </div>
      
    </div>
  );
}
