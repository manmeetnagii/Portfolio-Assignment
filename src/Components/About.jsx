/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/bgAbout.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a skilled software developer with proficiency in Web Development, and expertise in numerous libraries and frameworks including React.js, Next.js, Tailwind CSS, Express.js, Node.js, Shadcn-UI, etc. I am a quick learner, possess adaptive nature, leadership qualities and abilities to work in a team effectively. Know more about my skills and projects below.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express.js"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I develop beautiful websites and web-apps with the latest technologies and frameworks. I'm a passionate developer and designer who love to build amazing products.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText}/>
      <div
        style={{
          backgroundColor: "#000",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "1rem",
          boxShadow: "0 0 50px 0 rgba(0, 85, 200, 0.2)",
        }}
      >
        <h2 style={{ color: "white", fontWeight: "600" }}>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0", color: "#f0f8ff" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
