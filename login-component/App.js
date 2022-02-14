import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  const isLogIn = useSelector(authReducer => authReducer);
console.log(isLogIn)

//   const isLogOut = useSelector(authReducer => authReducer.isLoggingOut);
// console.log(isLogOut)



  return (
    <Fragment>
      <Header />
      {!isLogIn.isLoggingIn && <Auth />}
      {isLogIn.isLoggingIn && <UserProfile />}
      {/* {isLogOut && <Auth />} */}
      <Counter />
    </Fragment>
  );
}

export default App;
