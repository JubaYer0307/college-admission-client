import React, { useState, useEffect } from 'react';

const CategoryCard = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch('https://college-admission-server-end.vercel.app/collegeDetails')
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Local state to track if "Details" is clicked for each college
  const [detailsVisible, setDetailsVisible] = useState({});

  // Function to toggle "Details" visibility for a college
  const toggleDetailsVisibility = (collegeId) => {
    setDetailsVisible((prevState) => ({
      ...prevState,
      [collegeId]: !prevState[collegeId],
    }));
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {colleges.map((college, index) => (
        <div key={index} className="card w-96 glass">
          <img src={college.college_image} alt={college.college_name} className="w-full h-32 object-cover" />
          <div className="card-body">
            <h2 className="card-title">{college.college_name}</h2>
            <p>Admission Dates: {college.admission_dates}</p>

            {/* Show "Events" and "Sports" only when "Details" is clicked */}
            {detailsVisible[college.college_id] && (
              <>
                <h3 className="mt-4 font-semibold">Events</h3>
                <ul>
                  {college.events.map((event, idx) => (
                    <li key={idx}>{event}</li>
                  ))}
                </ul>
                <p className="mt-4">{college.research_history}</p>
                <h3 className="mt-4 font-semibold">Sports</h3>
                <ul>
                  {college.sports.map((sport, idx) => (
                    <li key={idx}>
                      {sport.sport_name} - {sport.team_name}
                      <ul className="ml-4">
                        {sport.upcoming_matches.map((match, i) => (
                          <li key={i}>{match}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Toggle "Details" visibility when the button is clicked */}
            <div className="mt-4">
              <button className="btn btn-primary" onClick={() => toggleDetailsVisibility(college.college_id)}>
                {detailsVisible[college.college_id] ? 'Hide Details' : 'Details'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
