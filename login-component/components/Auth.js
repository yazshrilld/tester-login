import { useEffect, useState } from 'react';
import classes from './Auth.module.css';
import { getUser } from '../actions/AuthAction';
import { useDispatch } from 'react-redux';

// let data = {
//   id: 101,
//   title: 'foo',
//   body: 'bar',
//   // userId: 1,
// }
const Auth = () => {
  // const isLogIn = useSelector(authReducer => authReducer);
  // console.log(isLogIn, 'fdddddddddddddddddddddddddddddd');
  // const isLogIn = useSelector(authReducer => authReducer);
  // console.log(isLogIn)

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(`${title} and ${body}`);
    dispatch(getUser({
      id: 101,
      title: title,
      body: body,
    }))
  }

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email'
              onChange={(event) => {
                setTitle(event.target.value);
              }
            }
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password'
              onChange={(event) => {
                setBody(event.target.value);
              }
            }
            />
          </div>
          <button onClick={loginHandler}>Login</button>

        </form>
      </section>
    </main>
  );
};

export default Auth;
