import "../assets/css/form.css"
import { FaPlus } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = {}
    formData.forEach( (value, key) => {
      data[key] = value
  });

  try{
    const response = await fetch('http://localhost:3000/surveys/create', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/x-www-form-urlencoded',},
      body: new URLSearchParams(data).toString(),
    });

    const responseData = await response.json()
    console.log('Response:', responseData);
    navigate('/')
  } catch (error) {
    console.log('Error submitting form:', error);
  }
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="gender">Gender</label>
        <input type="text" name="gender" />
        <label htmlFor="nationality">Nationality</label>
        <input type="text" name="nationality" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="phoneNo">Phone Number</label>
        <input type="text" name="phoneNo" />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" />
        <label htmlFor="message">Message</label>
        <input type="text" name="message" />
        <button type="submit">
        <FaPlus className="icon"/>Submit Survey
        </button>
      </form>
    </div>
  );
}

export default Form;
