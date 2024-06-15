import React from "react";

/* grid of 4 education cells with inline styles */
const Education = () => {
  const educationList = [
    {
      school: "SGTB Khalsa College, Delhi University",
      degree: "B.Sc. Computer Science",
      date: "2019 - 2022",
    },
    {
      school: "Guru Harkrishan Public School",
      degree: "12th | PCM + Computer Science",
      date: "2017 - 2018",
    },
    {
      school: "Guru Harkrishan Public School",
      degree: "10th",
      date: "2015 - 2016",
    },
  ];

  return (
    <section
      id="education"
      style={{
        background: "black",
        borderTop: "1px solid #3f3f3f",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >

      <div style={{ height:"80vh",  width: "100%", display: "flex", flexDirection: "column", gap: "5rem", alignItems: "center", justifyContent: "flex-start" }}>
        <h3 style={{ textAlign: "left", width: "90%", color: "white", marginTop: "5rem", fontSize: "45px", fontWeight: "600" }}>Education</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", }}>
          {educationList.map((education) => (
            <div
              key={education.school}
              style={{
                background: "black",
                padding: "1rem",
                borderRadius: "10px",
                width: "25rem",
                height: "10rem",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0.5rem",
                boxShadow: "0 0 15px 0 rgba(0, 85, 200, 0.6)",
              }}
            >
              <h3 style={{ fontSize: "20px", textWrap: "nowrap",  color: "white", fontWeight: "600" }}>{education.school}</h3>
              <p style={{ color: "white" }}>{education.degree}</p>
              <p style={{  color: "white" }}>{education.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
