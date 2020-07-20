import React, { Component } from "react";
import app from "./Firebase";
import Loading from "./Loading";
import Error from "./Error";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.currentUser = app.auth().currentUser;
    this.currentUserData = null;
  }
  componentDidMount() {
    const db = app.firestore();
    db.collection("users")
      .doc(this.currentUser.uid)
      .get()
      .then((doc) => {
        this.currentUserData = doc;
        this.setState({ loading: false });
      });
  }
  render() {
    if (this.state.loading) return <Loading />;
    if (this.currentUserData.exists)
      if (this.currentUserData.data().userType === "student")
        return (
          <div className="App min-vh-100 bg-light">
            <h1>App</h1>
            <button
              className="btn btn-dark"
              onClick={() => app.auth().signOut()}
            >
              Sign out
            </button>
            <p>{JSON.stringify(this.currentUserData.data())}</p>
          </div>
        );
      else if (this.currentUserData.data().userType === "guide") return "Guide";
      else if (this.currentUserData.data().userType === "admin") return "Admin";
      else if (this.currentUserData.data().userType === "lab_assistant")
        return "Lab assistant";
      else return <Error />;
    else return <Error />;
  }
}

export default App;
