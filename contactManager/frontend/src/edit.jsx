import React from "react";
import { Link } from "react-router-dom";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const location = window.location;
    const _id = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1,
    );
    const { name, phone } = props.contacts.find(
      (contacts) => contacts._id === _id,
    );
    this.state = {
      _id: _id,
      name: name,
      phone: phone,
    };
  }
  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.phone === "") {
      alert("All Field are Mandatory");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ _id: "", name: "", phone: "" });
  };
  render() {
    return (
      <div className="container-contact2">
        <Link to="/">
          <button className="btn3">{"<"}</button>
        </Link>
        <div className="wrap-contact2">
          <form className="contact2-form" onSubmit={this.update}>
            <span className="contact2-form-title">Edit Contact</span>
            <div className="wrap-input2">
              <input
                className="input2"
                placeholder="Name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <span className="focus-input2" data-placeholder="NAME"></span>
            </div>
            <div className="wrap-input2">
              <input
                className="input2"
                placeholder="phone"
                type="phone"
                name="phone"
                value={this.state.phone}
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
              <span className="focus-input2" data-placeholder="Phone"></span>
            </div>
            <button className="btn">Update</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditContact;
