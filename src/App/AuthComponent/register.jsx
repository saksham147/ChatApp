import React, { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setcontact_number] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [conf_password, setConfPassword] = useState("");
  const [username, setUsername] = useState("");

  async function handleSubmit(event){
    event.preventDefault();
    let res = await fetch("http://localhost:5000/users/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        contact_number: contact_number,
        password: password,
        conf_password: conf_password,
        username: username,
      }),
    });
    const data = await res.json();
    // if(data.status === 'Okay'){

    // }

    if (data.status === 'Okay') {
      window.location.href = '/Signin'
    }

  };

  return (
    <div>


      <div className="w-full bg-grey-500">
        <div className="container mx-auto py-8">
          <div className="w-96 mx-auto bg-white rounded shadow">

            <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">Student Application
            </div>

            <form onSubmit={handleSubmit}>
              <div className="py-4 px-8">

                <div className="mb-4">
                  <label className="block text-grey-darker text-sm font-bold mb-2"> Name</label>
                  
                  <input
                    className="border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-grey-darker text-sm font-bold mb-2">User Name</label>

                  <input
                    className="border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-grey-darker text-sm font-bold mb-2">Email</label>

                  <input
                    className="border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-grey-darker text-sm font-bold mb-2">Contact Number</label>

                  <input
                    className="border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    value={contact_number}
                    placeholder="Mobile Number"
                    onChange={(e) => setcontact_number(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-grey-darker text-sm font-bold mb-2">Password</label>

                  <input
                    className="border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-grey-darker text-sm font-bold mb-2">Conform Password</label>

                  <input
                    className="border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    value={conf_password}
                    placeholder="Conform Password"
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                </div>


                

                <div className="mb-4">
                  <button
                    type="submit"
                    className="mb-2 mx-16 rounded-full py-1 px-24 bg-gradient-to-r from-green-400 to-blue-500 "
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>

          </div>

        </div>
      </div>
      
    </div>
  );
}
