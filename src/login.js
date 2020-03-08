import React, { useState } from 'react';

const Homepage = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    errorEmail: false,
    errorPassword: false,
    loading: false
  });

  const changeHandler = event => {
    const { name, value } = event.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = email => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = password => {
    return password.length >= 6 && password.length <= 20;
  };

  const submitHandler = event => {
    event.preventDefault();

    setState(prev => ({ ...prev, loading: true }));

    const { email, password } = state;
    if (!validateEmail(email)) {
      return setState(prev => ({ ...prev, errorEmail: true, loading: false }));
    } else {
      setState(prev => ({ ...prev, errorEmail: false, loading: false }));
    }
    if (!validatePassword(password)) {
      return setState(prev => ({
        ...prev,
        errorPassword: true,
        loading: false
      }));
    } else {
      setState(prev => ({ ...prev, errorPassword: false, loading: false }));
    }
    setState(prev => ({
      ...prev,
      email: '',
      password: '',
      errorEmail: false,
      errorPassword: false
    }));

    window.location.href = './home';
  };
  const { email, password, errorEmail, errorPassword, loading } = state;
  return (
    <div className='main'>
      {loading ? (
        <div className='loader'></div>
      ) : (
        <form onSubmit={submitHandler}>
          <h3 id='logo'>Log In</h3>
          <label htmlFor='email'>Email</label>
          {errorEmail && <p className='error'>Invalid email address</p>}
          <input
            style={{ border: errorEmail && '2px red solid' }}
            type='text'
            data-testid='email'
            name='email'
            placeholder='Type in your email..'
            value={email}
            onChange={changeHandler}
            required
          />

          <label htmlFor='password'>Password</label>
          {errorPassword && (
            <p className='error'>
              Password length should not be less than 6 and more 20
            </p>
          )}
          <input
            style={{ border: errorPassword && '2px red solid' }}
            type='password'
            data-testid='password'
            name='password'
            value={password}
            placeholder='Enter your password..'
            onChange={changeHandler}
            required
          />

          <input
            type='submit'
            data-testid='submit'
            name='submit'
            value='Log In'
          />
        </form>
      )}
    </div>
  );
};

export default Homepage;
