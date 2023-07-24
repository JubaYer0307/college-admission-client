import React from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    // Assume you have a list of colleges
    const colleges = [
        {
            "id": 1,
            "college_name": "University of ABC",
            "college_image": "https://example.com/college1.jpg"
        },
        {
            "id": 2,
            "college_name": "XYZ College",
            "college_image": "https://example.com/college2.jpg"
        },
        {
            "id": 3,
            "college_name": "DEF University",
            "college_image": "https://example.com/college3.jpg"
        },
        {
            "id": 4,
            "college_name": "LMN University",
            "college_image": "https://example.com/college4.jpg"
        },
        {
            "id": 5,
            "college_name": "PQR Institute of Technology",
            "college_image": "https://example.com/college5.jpg"
        },
        {
            "id": 6,
            "college_name": "RST College",
            "college_image": "https://example.com/college6.jpg"
        }
    ];

    return (
        <div>
            <h2>Colleges List</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {colleges.map(college => (
                    <div key={college.id} style={{ maxWidth: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <figure>
                            <img src={college.college_image} alt={college.college_name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </figure>
                        <div style={{ padding: '16px' }}>
                            <h2 style={{ fontSize: '1.5rem', margin: '0' }}>{college.college_name}</h2>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
                                <Link to={`/admission/${college.id}`} style={{ padding: '8px 16px', background: '#007BFF', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>Apply</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admission;
