import React, { useEffect, useRef } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { ShopPage } from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import { SignInAndSingUp } from "./pages/SingInAndSingUp/SignInAndSingUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/User/user.actions";
import { selectCurrentUser } from "./redux/User/user.selectors";
import { createStructuredSelector } from "reselect";


const App = ({ setCurrentUser, currentUser }) => {
  var unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          exact
          path="/sign-in"
          element={currentUser ? <Navigate to="/" /> : <SignInAndSingUp />}
        />
        <Route exact path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
