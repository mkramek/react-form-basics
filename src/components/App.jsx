import { Component } from "react";
import styles from "./App.module.scss";
import { nanoid } from "nanoid";

class App extends Component {
  firstNameId = nanoid();
  lastNameId = nanoid();
  phoneId = nanoid();
  emailId = nanoid();
  messageId = nanoid();
  privacyPolicyId = nanoid();

  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    privacyPolicy: false,
  };

  handleChange = (ev) => {
    const { name, value, type, checked } = ev.currentTarget;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleForm = (ev) => {
    ev.preventDefault();
    window.alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <>
        <h1 className={styles.heading}>React: Formularze</h1>
        <form onSubmit={this.handleForm} className={styles.form}>
          <label htmlFor={this.firstNameId}>Imię</label>
          <input
            id={this.firstNameId}
            type="text"
            name="firstName"
            placeholder="Imię"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nazwisko"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Nr telefonu"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Adres email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <textarea
            placeholder="Treść wiadomości"
            rows={6}
            name="message"
            value={this.state.message}
            onChange={this.handleChange}></textarea>
          <label htmlFor={this.privacyPolicyId}>
            Akceptuję Politykę Prywatności
          </label>
          <input
            type="checkbox"
            name="privacyPolicy"
            id={this.privacyPolicyId}
            checked={this.state.privacyPolicy}
            onChange={this.handleChange}
          />
          <button type="submit">Wyślij</button>
        </form>
      </>
    );
  }
}

export default App;
