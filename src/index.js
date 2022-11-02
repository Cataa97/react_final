import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import ResponsiveAppBar from './pages/navbar/Navbar';
import About from './pages/about/About';
import Login from './pages/login/Login';
import TodoList from './pages/todo/TodoList';
import PrivateRoutes from './routes/Privateroutes';
import { AuthProvider } from './context/AuthProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="proyectos" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route element={<PrivateRoutes />}>
          <Route exact path="todolist" element={<TodoList />} />
        </Route>
        <Route exact path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>


);
