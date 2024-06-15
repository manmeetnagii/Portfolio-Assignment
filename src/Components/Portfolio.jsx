/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/project.jpg";

const imageAltText = "project";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Official Portfolio",
    description:
      "My perosnal portfolio site. This site showcases my work and experience. Built with Next.js and Tailwind CSS.",
    url: "https://manmeetnagi.vercel.app",
  },
  {
    title: "Meta Drive",
    description:
      "Access your files anytime, anywhere with ease. Meta Drive is a  full stack cloud storage service that allows you to store your files and access them from any device.",
    url: "https://meta-drive.vercel.app",
  },
  {
    title: "Architectural Design Forum",
    description:
      "A freelance project for architectural company. This site is built with HTML, CSS and JavaScript.",
    url: "https://architecturaldesignforum.netlify.app",
  },
  {
    title: "Fig Pro",
    description:
      "Design in real-time collaborative environment with your friends. Fig Pro is a design tool that allows you to create designs with your friends in real-time.",
    url: "https://figprodev.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ background: "black" }}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            className="slideLeft"
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              borderTopRightRadius: "1rem",
              borderBottomRightRadius: "1rem",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f0f8ff", fontWeight: "700" }}
              >
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
