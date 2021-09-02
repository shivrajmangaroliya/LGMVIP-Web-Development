import React from "react";
import User from "./User";
import "./main.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  showUsers = () => {
    const finalUsers = this.props.users.map((user) => {
      return <User user={user} key={user.id} />;
    });
    return finalUsers;
  };

  showContent = () => {
    if (this.props.users.length === 0) {
      return (
        <div className="center">
          <div className="loader"></div>
          <p>Please fetch users...</p>
        </div>
      );
    }
    return this.showUsers();
  };

  render() {
    return <div className="grid-container">{this.showContent()}</div>;
  }
}

export default Users;
