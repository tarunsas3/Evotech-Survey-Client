import PropTypes from "prop-types";
import "../assets/css/survey.css";
import { useEffect, useState } from "react";
import { CgLogOut } from "react-icons/cg";

function Surveys({ onLogout }) {
  const [survey, setSurvey] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/surveys/view");
        const data = await response.json();
        setSurvey(data.surveys);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="surveyDisplay">
      <div className="buttonContainer">
        <button onClick={handleLogout}>
        <CgLogOut className="iconLogout"/>
        Logout
        </button>
      </div>
      <ul>
        {survey.map((survey) => (
          <li key={survey._id}>
            <div className="contents">
              <label htmlFor="name" className="name">
                {survey.name}
              </label>
              <label htmlFor="gender" className="gender">
                {survey.gender}
              </label>
              <label htmlFor="nationality" className="nationality">
                {survey.nationality}
              </label>
              <label htmlFor="email" className="email">
                {survey.email}
              </label>
              <label htmlFor="phoneNo" className="phoneNo">
                {survey.phoneNo}
              </label>
              <label htmlFor="address" className="address">
                {survey.address}
              </label>
              <label htmlFor="message" className="message">
                {survey.message}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

Surveys.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Surveys;
