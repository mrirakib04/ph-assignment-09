import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import App from "../App";
import ErrorPage from "./Error/ErrorPage";
import Home from "../Layout/Home/Home";
import Profile from "../Layout/Profile/Profile";
import SkillDetails from "../Layout/SkillDetails/SkillDetails";
import Login from "../Layout/Auth/Login";
import Register from "../Layout/Auth/Register";
import Skills from "../Layout/Skills/Skills";
import IsLogin from "./Security/IsLogin";
import Forgot from "../Layout/Auth/Forgot";
import About from "../Layout/About/About";
import Contact from "../Layout/Contact/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          {/* Error page */}
          {/* <Route path="*" element={<ErrorPage></ErrorPage>}></Route> */}
          {/* All routes */}
          <Route index element={<Home></Home>}></Route>
          <Route
            path="/me"
            element={<Navigate to={"/profile"}></Navigate>}
          ></Route>
          <Route
            path="/profile"
            element={
              <IsLogin>
                <Profile></Profile>
              </IsLogin>
            }
          ></Route>
          <Route path="/skills" element={<Skills></Skills>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route
            path="/skill/:id"
            element={
              <IsLogin>
                <SkillDetails></SkillDetails>
              </IsLogin>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/forgot" element={<Forgot></Forgot>}></Route>
        </Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
