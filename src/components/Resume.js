import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span style={{ fontSize: "24px" }}>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">{item.MonthOfPassing} </em>
                      </p>

                      <p
                        style={{
                          color: "black",
                          fontSize: "14px",
                          letterSpacing: "0.5px",
                          margin: "8px 0",
                        }}
                      >
                        {" "}
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span style={{ fontSize: "27.5px" }}>Expérience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p
                        style={{
                          color: "black",
                          fontSize: "14px",
                          letterSpacing: "0.5px",
                          margin: "8px 0",
                        }}
                      >
                        {item.Achievements}
                      </p>
                      <div
                        style={{
                          display: "inline-block",
                          backgroundColor: "lightgray",
                          padding: "8px",
                          borderRadius: "8px",
                          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", // Ajouter une ombre douce pour un effet d'élévation
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "bold",
                            color: "black",
                            fontSize: "16px", // Augmenter la taille de police pour un aspect plus attrayant
                            textShadow: "2px 2px 2px rgba(0,0,0,0.3)", // Augmenter l'effet de texte en 3D
                            textAlign: "center", // Centrer le texte horizontalement
                          }}
                        >
                          {item.competence}
                        </p>
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span style={{ fontSize: "27.5px" }}>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                          style={{
                            width: `${item.value}%`,
                            height: "20px", // Modifier la hauteur de la barre
                            lineHeight: "20px", // Modifier la hauteur de la barre
                          }}
                        ></span>
                        <em>{item.skillname}</em>
                        <span className="percentage">{item.value}%</span>{" "}
                        {/* Ajout du pourcentage */}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
