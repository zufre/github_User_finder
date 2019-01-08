import axios from "axios";

const API_URL = "https://api.github.com/users";

class Form {
  constructor() {
    this.API_URL = "";
    this.searchTerm = "";
    this.searchInput = document.querySelector('input[name="search"]');
    this.searchInput.addEventListener("keyup", () => this.handleKeyup(event));

    this.submitButton = document.querySelector('button[type="submit"]');

    this.submitButton.disabled = !this.searchTerm;

    this.form = document.querySelector("form");
    this.form.addEventListener("submit", () => {
      this.handleSubmit(event);
    });
  }
  handleKeyup(event) {
    this.searchTerm = event.target.value.trim();
    this.API_URL = `${API_URL}/${this.searchTerm}`;
    this.submitButton.disabled = !this.searchTerm;
  }
  handleSubmit(event) {
    event.preventDefault();

    axios
      .get(this.API_URL)
      .then(({ data }) => console.log(data))
      .catch(err => console.error("Promise rejected!", err));
    this.form.reset();
  }
}
export default Form;
