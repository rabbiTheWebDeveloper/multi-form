import React, { useState } from "react";
import { useParams } from "react-router-dom";
import OtherInfoForm from "./OtherInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";



function Form() {
  const [page, setPage] = useState(0);
  const [file, setFile] = useState(null);
 
  const [formData, setFormData] = useState({
    job_id: "",
    full_name: "",
    email_address: "",
    cv_or_resume: "",
    phone_number: "",
    expected_salary: "",
    portfolio_or_github_link: "",
    project_link : "",
    why_fit_for_job: "",
    linkedIn_profile_link: "",
  });
  // const[application_id] =useParams()
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    // console.log(newFile)
    setFile(newFile);
    console.log(newFile)
  };
  

  const FormTitles = ["Personal Info", "Other Information"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfoForm handleFileChange={handleFileChange} page={page} setPage={setPage} FormTitles={FormTitles}  formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfoForm page={page} setPage={setPage} FormTitles={FormTitles}  formData={formData} setFormData={setFormData} />;
    }
  };
console.log(formData)
// setFormData({...formData,job_id: application_id})
  return (
    <div className="form">
      <div className="progressbar">
      </div>
      <div className="form-container">
        <div className="header">
        </div>
        <div className="body">{PageDisplay()}</div>
      </div>
    </div>
  );
}

export default Form;
