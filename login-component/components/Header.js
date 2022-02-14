import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../actions/AuthAction';
import classes from './Header.module.css';

const Header = () => {

  const dispatch = useDispatch();
  const isLogIn = useSelector(authReducer => authReducer);
  // console.log(isLogIn)


  const logoutHandler = () => {
    dispatch(logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Login & Counters</h1>
      {isLogIn.isLoggingIn && (
        <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
          <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      )}
    </header>
  );
};

export default Header;
