/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../context";
import { auth } from "../firebase";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("tanzil");
  const [loading, setLoading] = useState(true);

  // Account registrations Function
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((userCredential) => {
    //   // Signed up
    //   const user = userCredential.user;
    //   setUser(user);
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;

    //   console.error(errorMessage, errorCode);
    //   // ..
    // });
  };
  const googleProvider = new GoogleAuthProvider();

  //Google Sign in Function
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // For checking Current Fuser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        console.log(user);
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
        // console.log("no User");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //Logout Function
  const logout = () => {
    setLoading(true);
    setUser(null);

    return signOut(auth);
  };

  // Login Function
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Update userName Function
  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.error(error);
      });
  };

  const val = {
    user,
    setUser,
    register,
    signInWithGoogle,
    logout,
    login,
    updateUserName,
    loading,
    setLoading,
  };

  if (loading) {
    return (
      <div className="w-screen h-screen  mx-auto  border-l-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
        <div className="w-16 h-16  border-b-2 border-indigo-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
          <div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div>
        </div>
      </div>
    );
  }

  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
