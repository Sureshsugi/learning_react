import React from "react";
import{BrowserRouter, Routes, Route}from "react-router-dom";


import HomeScreen from "./screens/home-page";
import ContactPage from "./screens/contact-page";
import LoginScreen from "./screens/login-page";
import ContactScreen from "./screens/contact-page";
import ToDoScreen from "./screens/todo-app-page";
import LandingScreen from "./screens/landing-page";
import Userlogin from "./screens/user-login";
import AccountCreatingPage from "./screens/account-creating";
import Userprofilescreen from "./screens/user-profile";
import GETAllUsersPage from "./screens/get-all-user";
import postuseraccount from "./screens/post-user-account";
import Productscreating from "./screens/products-creating";
import Postuseraccount from "./screens/post-user-account";
import Apiuser from "./screens/api-user";
import CrudOperationPage from "./screens/crud-operation";

function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path="" element={<LandingScreen></LandingScreen>}></Route> 
      <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
      <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
      <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
      <Route path="todo" element={<ToDoScreen></ToDoScreen>}></Route>
      <Route path="signup" element={<Userlogin></Userlogin>}></Route>
      <Route path="account" element={<AccountCreatingPage></AccountCreatingPage>}></Route>
      <Route path="user" element={<Userprofilescreen></Userprofilescreen>}></Route>
      <Route path="all" element={<GETAllUsersPage></GETAllUsersPage>}></Route>
      <Route path="post" element={<Postuseraccount></Postuseraccount>}></Route>
      <Route path="products" element={<Productscreating></Productscreating>}></Route>
      <Route path="api" element={<Apiuser></Apiuser>}></Route>
      <Route path="crud" element={<CrudOperationPage></CrudOperationPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
