"use client"
import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showPassword, setShowPassword] = useState("");
  const [data, setData] = useState({
    email: "",
    category: "",
    username: "",
    phoneNumber: "",

  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const Roles = [
    { id: 1, label: "Frontdesk", value: "Frontdesk" },
    { id: 2, label: "Accountant", value: "Accountant" },
    { id: 3, label: "Teacher", value: "Teacher" },

  ]


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="max-w-md text-black w-full p-6 bg-white rounded-md shadow-md">
        {showRegister === false ? (
          <>
            <h2 className="text-2xl text-black font-bold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-black text-sm font-medium text-gray-600"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={data.username}
                  onChange={handleOnChange}
                  className="mt-1 text-black p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-black text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <div className="flex border rounded-md mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleOnChange}
                    className="p-2 text-black w-full rounded-md"
                  />
                  <div
                    className="absolute right-3 bottom-3 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </form>
            <p className="p-2 hover:underline">
              Don't have an Account?
              <button
                onClick={() => setShowRegister(true)}
                className="px-2 text-blue-500 hover:text-red-400"
              >
                Register
              </button>
            </p>
          </>
        ) : (

          <>
            <h2 className="text-2xl text-black font-bold mb-4">Register</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-black text-sm font-medium text-gray-600"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleOnChange}
                  value={data.username}
                  className="mt-1 text-black p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-black text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleOnChange}
                  value={data.phoneNumber}
                  className="mt-1 text-black p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-black text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleOnChange}
                  value={data.email}
                  className="mt-1 text-black p-2 w-full border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label htmlFor='category' className='block text-black text-sm font-medium text-gray-600'>
                  Role :
                </label>
                <select required value={data.category} className='mt-1 border p-2 w-full rounded-md text-black' name='category' onChange={handleOnChange}>
                  <option value={""} >
                    Select Category
                  </option>
                  {
                    Roles.map((el, index) => {
                      return (
                        <option value={el.value} key={el.value + index}>
                          {el.label}
                        </option>
                      )
                    })
                  }
                </select>

              </div>




              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Register
              </button>
            </form>
            <p className="p-2 hover:underline">
              Already have an Account?
              <button
                onClick={() => setShowRegister(false)}
                className="px-2 text-blue-500 hover:text-red-400"
              >
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
