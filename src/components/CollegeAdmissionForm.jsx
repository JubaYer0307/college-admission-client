import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CollegeAdmissionForm = () => {
    const { id } = useParams();
    const [candidateInfo, setCandidateInfo] = useState({
        candidateName: '',
        subject: '',
        candidateEmail: '',
        candidatePhone: '',
        address: '',
        dateOfBirth: '',
        image: '',
    });

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
    const candidateName = form.candidateName.value;
    const subject = form.subject.value;
    const email = form.candidateEmail.value;
    const candidatePhone = form.candidatePhone.value;
    
    const address = form.address.value;
    const dateOfBirth = form.dateOfBirth.value;

    const newAdmission = {
    candidateName,
      subject,
      email,
      candidatePhone,
      address,
      dateOfBirth,
      collegeId: id
    };

    fetch("https://college-admission-server-end.vercel.app/admissionCollege", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAdmission),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
    

    

  return (
    <div className='text-center'>
        <h2>College Admission Form</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="candidateName"
                placeholder="Candidate Name"
                className="input input-bordered input-info w-full max-w-xs"
            />
            <br />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input input-bordered input-info w-full max-w-xs"
            />
            <br />
            <input
                type="email"
                name="candidateEmail"
                placeholder="Email"
                className="input input-bordered input-info w-full max-w-xs"
            />
            <br />
            <input
                type="tel"
                name="candidatePhone"
                placeholder="Phone"
                className="input input-bordered input-info w-full max-w-xs"
            />
            <br />
            <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered input-info w-full max-w-xs"
            />
            <br />
            <input
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth"
                className="input input-bordered input-info w-full max-w-xs"
            />
            <br />
            <input type="submit" value="Add College" className="btn btn-block" />
        </form>
    </div>
);
}

export default CollegeAdmissionForm;
