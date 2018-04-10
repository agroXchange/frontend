import React, { PureComponent } from "react";

export default class SignupForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Organization name*:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name || ""}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>
            What is your field of business*:
            <select
              name="field"
              id="field"
              value={this.state.field || ""}
              onChange={this.handleChange}
            >
              <option value="producer">Producer</option>
              <option value="trader">Trader</option>
              <option value="logistics">Logistics</option>
              <option value="insurance">Insurance</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            What is the type of your organization*:
            <select
              name="type"
              id="type"
              value={this.state.type || ""}
              onChange={this.handleChange}
            >
              <option value="cooperative">Cooperative</option>
              <option value="association">Association</option>
              <option value="private">Private</option>
              <option value="ngo">NGO</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="address">Address:*</label>
          <input
            type="text"
            name="address"
            id="address"
            value={this.state.address || ""}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country:*</label>
          <input
            type="text"
            name="country"
            id="country"
            value={this.state.country || ""}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">
            If you plan to sell, what is the nearest city or port:
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={this.state.city || ""}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number:*</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={this.state.phone || ""}
            onChange={this.handleChange}
          />
        </div>
        <div>
        <label htmlFor="coc">Chamber of Commerce registration number (optional now):</label>
          <input
            type="text"
            name="coc"
            id="coc"
            value={this.state.coc || ""}
            onChange={this.handleChange}
          />
          <p><i>To participate on this website, you will need to provide proof of
          your membership of your local chamber of commerce. If you have your
          registration number ready, please fill it in here. You can also do
          this after signing up. If you have any questions, please contact the webmaster.</i></p>
        </div>
        <div>
          <label htmlFor="email">Email:*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email || ""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password:*</label>
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password || ""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm password:*</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={this.state.confirmPassword || ""}
            onChange={this.handleChange}
          />
        </div>

        {this.state.password &&
          this.state.confirmPassword &&
          this.state.password !== this.state.confirmPassword && (
            <p style={{ color: "red" }}>The passwords do not match!</p>
          )}

        <button type="submit">Sign up</button>
      </form>
    );
  }
}
