import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom"


export const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [discordId, setdiscordId] = useState("")

    const { handleLogin } = useContext(AuthContext)
    const { token } = useContext(AuthContext)


    function login(user) {
        handleLogin(user)
        if (token) {
            return navigate("/todolist")
        }
    }



    return (
        <Box
            variant="div"
            className="login"
            sx={{ width: "400px", margin: "auto", marginTop: "50px" }}
        >

            <TextField
                name="email"

                variant="outlined"
                size="small"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ margin: "10px" }}

            />
            <br />
            <TextField

                variant="outlined"
                size="small"
                label="Password"
                name="password"
                value={discordId}
                onChange={(e) => setdiscordId(e.target.value)}
                sx={{ margin: "10px" }}

            />
            <br />
            <Button onClick={() => login({ email, discordId })} variant="contained" sx={{ margin: "10px" }}>
                Login
            </Button>
        </Box>
    );
}