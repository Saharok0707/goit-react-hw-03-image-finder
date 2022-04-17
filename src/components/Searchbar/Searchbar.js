import { Component } from 'react';
import s from './Searchbar.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    name: '',
    page: 1,
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name.trim() === '') {
      toast.info('Enter your request.');
      return;
    }

    this.props.onSubmit(this.state.name);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({
      name: value,
    });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <header className={s.searchbar}>
          <form className={s.form} onSubmit={this.handleSubmit}>
            <button type="submit" className={s.button}>
              <span className={s.button_label}>Search</span>
            </button>

            <input
              onChange={this.handleChange}
              className={s.input}
              type="text"
              name="name"
              value={name}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
        <ToastContainer autoClose={3000} theme={'colored'} />
      </div>
    );
  }
}

export default Searchbar;