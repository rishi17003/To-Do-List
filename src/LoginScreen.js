import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = ()=> {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Email and Password are required.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address.');
      return;
    }
    const numericRegex = /^[0-9]+$/;
    if (!numericRegex.test(password)) {
      setError('Password must contain only numeric characters.');
      return;
    }
    const minPasswordLength=6;
    if (password.length < minPasswordLength) {
      setError(`Password must be at least ${minPasswordLength} digits long.`);
      return;
    }
    console.log("Login Successful",{email,password});
    navigate('/todo');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
    
};

export default LoginScreen;
