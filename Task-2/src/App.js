import React from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Users from "./components/Users";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  getNavUserhandler = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=1");
    console.log(response.data.data);
    this.setState({ users: response.data.data });
  };

  render() {
    return (
      <div style={{ overflowX: "hidden", textAlign: "center" }}>
        <h1>Let'sGrowMore</h1>
        <Nav getNavUserhandler={this.getNavUserhandler} />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;

//https://reqres.in/api/users?page=1
