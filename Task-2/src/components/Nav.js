import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler = () => {
    this.props.getNavUserhandler();
  };

  render() {
    return (
      <div className="nav">
        <h1>Get Users</h1>
        <button className="button-style" onClick={this.clickHandler}>
          getUser
        </button>
      </div>
    );
  }
}

export default Nav;
