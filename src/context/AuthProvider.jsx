import axios from "axios";
import React, { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("");

    const handleLogin = (data) => {
        axios({
            method: "post",
            url: "https://ms-discord-upy5mhs63a-rj.a.run.app/auth/login",
            headers: { 
                    'Content-Type': 'application/json'
                  },
            data: data,
        })
            .then((res) => { setToken(res.data.token) })
            .catch((error) => { console.log(error) });
    };

    const value = {
        handleLogin,
        token,
        setToken
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
