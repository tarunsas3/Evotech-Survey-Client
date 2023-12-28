import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../assets/css/form.css';
import { LuLogIn } from 'react-icons/lu';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString(),
      });

      const responseData = await response.json();
      console.log('Response:', responseData);

      if (responseData.auth) {
        // If authentication is successful, invoke the onLogin callback
        // and navigate to the Surveys component
        onLogin();
        navigate('/surveys');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">
          <LuLogIn className="icon" />
          Login
        </button>
      </form>
    </div>
  );
}

// Prop types validation
Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
