import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../../constant/constant";
import VacancyDetails from "./VacancyDetails";
import WhoWeAre from "./WhoWeAre";

const CarrerDetailsBanner = () => {
  const [jobDetails, setJobDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `https://sitcdev.xyz/api/v1/job/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobDetails(data.data));
  }, []);

  const {
    type,
    title,
    salary_type,
    deadline,
    created_at,
    vacancy,
    max_salary,
    min_salary,
    details,
  } = jobDetails;

  return (
    <>
      <section className="CarrerBanner CarrerDetailsBanner">
        <Container>
          <Row className="d_flex">
            <Col xs={12} lg={5}>
              <div className="CarrerDetailsBannerContent">
                <h2>{title}</h2>

                <ul>
                  <li>
                    <span>Job Type:</span>
                    {type == "full_time" ? "Full Time" : ""}
                  </li>
                  <li>
                    <span>Deadline:</span>
                    {deadline}
                  </li>
                  <li>
                    <span>Published On:</span>
                    {created_at}
                  </li>
                  <li>
                    <span>Vacancy:</span>
                    {vacancy}
                  </li>
                  <li>
                    <span>Experience:</span>3 To 5 Years
                  </li>
                  {salary_type == "negotiable" ? (
                    <li>
                      <span>Salary:</span>Negotiable
                    </li>
                  ) : (
                    <li>
                      <span>Salary: </span>BDT{" "}
                      {min_salary?.toLocaleString("en-US") || ""} - BDT{" "}
                      {max_salary?.toLocaleString("en-US") || ""}
                    </li>
                  )}

                  <li>
                    <span>Office Time:</span>09:30 AM - 06:00 PM
                  </li>
                  <li>
                    <span>Location:</span>Level: 5, House: 32/34, Road: 07,
                    Block: C, Niketan, Gulshan – 1, Dhaka – 1212
                  </li>
                </ul>
              </div>
            </Col>

            <Col xs={12} lg={7}>
              <div className="CarrerBannerImg">
                <img
                  src="../assets/images/Carrer_banner.png"
                  alt="Carrer_banner"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <WhoWeAre></WhoWeAre>

      <VacancyDetails text={details}></VacancyDetails>
      <Row>
        <Col sm={12}>
          <div className="VacancyDetailContent">
            <div className="VacancyDetailItem">
              <div className="GoPages">
                <Link to={'/job_application/'+ id} className="bg getLocation">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div className="section_gaps"></div>
    </>
  );
};

export default CarrerDetailsBanner;
