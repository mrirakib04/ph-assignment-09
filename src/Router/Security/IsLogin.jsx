import PropTypes from "prop-types";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import { Navigate } from "react-router";
import Loader from "../../Components/Loader";
import { toast } from "react-toastify";

const IsLogin = ({ children }) => {
  const { user, loading } = useContext(MainContext);

  if (loading) {
    return <Loader></Loader>;
  }

  if (!user) {
    toast.info("Please login first!", {
      position: "top-center",
      autoClose: 2000,
    });
    return <Navigate to="/login" replace />;
  }

  return children;
};

IsLogin.propTypes = {
  children: PropTypes.node.isRequired,
};
export default IsLogin;
