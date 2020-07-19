import React, { Component } from "react";
import app from "./Firebase";
import Signin from "./components/auth/Signin";
import { Route, Switch, Redirect } from "react-router-dom";
import Signup from "./components/auth/Signup";
import ForgotPassword from "./components/auth/ForgotPassword";

// User based routing

class App extends Component {
  constructor(props) {
    super(props);

    // this.currentUser = app.auth().currentUser;
    // this.currentUserData = null;
  }
  componentDidMount() {
    // if (this.currentUser)
    //   app
    //     .firestore()
    //     .collection("users")
    //     .doc(this.currentUser.uid)
    //     .get()
    //     .then((snapshot) => {
    //       this.currentUserData = snapshot;
    //       this.forceUpdate();
    //     });
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Redirect to="/signin" />
        </Switch>
      </div>
    );
  }
}

export default App;
