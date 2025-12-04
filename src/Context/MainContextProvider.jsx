import { useEffect, useState } from "react";
import MainContext from "./MainContext";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

const MainContextProvider = ({ children }) => {
  const name = "Rakib";
  // Loaders
  const [loading, setLoading] = useState(true);

  // User Info
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");

  // Handle Registration
  const handleRegisterEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Handle Login
  const handleLoginEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Handle Google Provider
  const handleGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Handle Logout
  const handleLogout = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        toast.info(`Logout Successful`, {
          position: "top-center",
          autoClose: 2000,
          closeButton: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: "top-right",
          autoClose: 2000,
          closeButton: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  // User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUserName(currentUser.displayName);
        setUserImage(currentUser.photoURL);
      } else {
        setUser(null);
        setUserName("");
        setUserImage("");
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const contextkeys = {
    loading,
    setLoading,
    name,
    handleRegisterEmailPassword,
    handleLoginEmailPassword,
    handleGoogle,
    handleLogout,
    user,
    setUser,
    userName,
    setUserName,
    userImage,
    setUserImage,
  };

  return (
    <MainContext.Provider value={contextkeys}>{children}</MainContext.Provider>
  );
};

MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContextProvider;
