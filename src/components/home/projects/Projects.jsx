import { Link } from "react-router-dom";
import { ProjectItem } from "@/components";

const Projects = () => {
  const featuredProjects = [
    {
      id: "6f6d35ff",
      name: "ShopSwift",
      tags: [
        "node.js",
        "react",
        "tailwindcss",
        "react-router-dom",
        "redux",
        "mongodb",
        "express",
      ],
      description:
        "A full-stack MERN e-commerce app with authentication, product browsing, shopping cart, and order management.",
      source: "https://github.com/sam4web/project-shopswift",
      preview: "https://project-shopswift.netlify.app/",
    },
    {
      id: "6f6d22ef",
      name: "docket",
      tags: [
        "node.js",
        "react",
        "tailwindcss",
        "react-router-dom",
        "redux",
        "mongodb",
        "express",
      ],
      description:
        "A web app for managing notes with a seamless and intuitive user experience. Key features include user authentication, creating, viewing, updating, and deleting notes.",
      source: "https://github.com/sam4web/project-docket",
      preview: "https://project-docket.netlify.app/",
    },
    {
      id: "a71ab3d3",
      name: "devfetch",
      tags: ["react", "tailwindcss", "zustand", "daisyui", "githubapi"],
      description:
        "DevFetch is a React-based web app for searching GitHub users, viewing profiles, sorting repositories, and toggling between light and dark themes.",
      source: "https://github.com/sam4web/devfetch",
      preview: "https://projectdevfetch.netlify.app/",
    },
    {
      id: "2cb9bb3d",
      name: "QuickQuiz",
      tags: ["react", "scss", "opendb-api"],
      description:
        "Quiz game built using ReactJS and SCSS, featuring questions from the Open Trivia Database (opentdb.com) API. Test your knowledge and enjoy an engaging, interactive experience!",
      source: "https://github.com/sam4web/quickquiz",
      preview: "https://sam4web.github.io/quickquiz/",
    },
    {
      id: "1da5e9d8",
      name: "xolcy template",
      tags: ["html", "scss", "javascript", "jquery"],
      description:
        "Xolcy is a basic web project made with HTML, SCSS, and JavaScript. It's simple and easy to use, great for learning or building your own websites.",
      source: "https://github.com/sam4web/xolcy-template",
      preview: "https://sam4web.github.io/xolcy-template/",
    },
    {
      id: "635dad15",
      name: "socialated template",
      tags: ["html", "scss", "javascript", "jquery"],
      description:
        "Socialated is a straightforward web project created with HTML, SCSS, JavaScript, and jQuery. It's designed to be easy to use and perfect for showcasing basic web development skills.",
      source: "https://github.com/sam4web/socialated-template",
      preview: "https://sam4web.github.io/socialated-template/",
    },
  ];

  return (
    <section>
      <div className="wrapper">
        <div className="section-spacing">
          <div className="space-y-1.5 text-center">
            <h2 className="section-title section-title-center">
              featured projects
            </h2>
            <br />
            <p className="section-subtitle">Portfolio</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>

          <div className="flex-center">
            <Link to={"/archive"}>
              <button className="btn">View the archive</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
