import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    search: ''
  };

  search = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.input.value;
    console.log(value);
    this.setState(() => ({
      search: value
    }), () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <header className="searchbar">
        <form
          className="form"
          onSubmit={(evt) => {
            this.search(evt);
          }}
        >
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            name="input"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
