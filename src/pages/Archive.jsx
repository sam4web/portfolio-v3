import { TableData } from "@/components";
import useTitle from "@/hooks/useTitle";

const Archive = () => {
  useTitle("Archive | Sijal Manandhar");

  const projects = [
    {
      id: "6f3d53ef",
      year: 2024,
      title: "ShopSwift",
      tools: [
        "node.js",
        "react",
        "tailwindcss",
        "react-router-dom",
        "redux",
        "mongodb",
        "express",
      ],
      source: "https://github.com/sam4web/project-shopswift",
      preview: "https://project-shopswift.netlify.app/",
    },
    {
      id: "6f6d22ef",
      year: 2024,
      title: "docket",
      tools: [
        "node.js",
        "react",
        "tailwindcss",
        "react-router-dom",
        "redux",
        "mongodb",
        "express",
      ],
      source: "https://github.com/sam4web/project-docket",
      preview: "https://project-docket.netlify.app/",
    },
    {
      id: "af7c1fe6",
      year: 2024,
      title: "devfetch",
      tools: ["react", "tailwindcss", "zustand", "daisyui", "githubapi"],
      source: "https://github.com/sam4web/devfetch",
      preview: "https://projectdevfetch.netlify.app/",
    },
    {
      id: "9d5ae097",
      year: 2023,
      title: "age calculator app",
      tools: ["react", "tailwindcss", "css"],
      source: "https://github.com/sam4web/age-calculator-app",
      preview: "https://sam4web.github.io/age-calculator-app/",
    },
    {
      id: "90be598d",
      year: 2024,
      title: "newsletter signup form",
      tools: ["react", "tailwindcss", "css"],
      source: "https://github.com/sam4web/newsletter-signup-form",
      preview: "https://sam4web.github.io/newsletter-signup-form/",
    },
    {
      id: "f54gdf263",
      year: 2024,
      title: "Shopswift [Django]",
      tools: ["python", "django", "tailwindcss", "alpinejs"],
      source: "https://github.com/sam4web/shopswift-django",
    },
    {
      id: "f54gdf736",
      year: 2024,
      title: "book library system",
      tools: ["python"],
      source: "https://github.com/sam4web/book-library-system",
    },
    {
      id: "g54gddfe6",
      year: 2024,
      title: "pong game",
      tools: ["python", "pygame"],
      source: "https://github.com/sam4web/pong-game",
    },
    {
      id: "f54ff736",
      year: 2024,
      title: "space shooter",
      tools: ["python", "pygame"],
      source: "https://github.com/sam4web/space-shooter",
    },
    {
      id: "a01c831e",
      year: 2023,
      title: "intro signup form component",
      tools: ["vue", "tailwindcss", "css"],
      source: "https://github.com/sam4web/intro-signup-form-component",
      preview: "https://sam4web.github.io/intro-signup-form-component/",
    },
    {
      id: "b75382bc",
      year: 2023,
      title: "django notes app",
      tools: ["django", "html", "css", "javascript"],
      source: "https://github.com/sam4web/django-notes-app/",
    },
    {
      id: "e289ebe8",
      year: 2023,
      title: "DjangoCRM",
      tools: ["django", "html", "css", "javascript"],
      source: "https://github.com/sam4web/DjangoCRM",
    },
    {
      id: "252d32f7",
      year: 2023,
      title: "truelead template",
      tools: ["html", "scss", "javascript", "jquery"],
      source: "https://github.com/sam4web/truelead-template",
      preview: "https://sam4web.github.io/truelead-template/",
    },
    {
      id: "babfcd6e",
      year: 2022,
      title: "meat shop",
      tools: ["html", "scss", "javascript", "jquery"],
      source: "https://github.com/sam4web/meat-shop",
      preview: "https://sam4web.github.io/meat-shop/",
    },
    {
      id: "175f0d1d",
      year: 2023,
      title: "profile card component",
      tools: ["html", "tailwindcss"],
      source: "https://github.com/sam4web/profile-card-component",
      preview: "https://sam4web.github.io/profile-card-component/",
    },
    {
      id: "4a45b74c",
      year: 2023,
      title: "results summary component",
      tools: ["html", "tailwindcss", "javascript"],
      source: "https://github.com/sam4web/results-summary-component",
      preview: "https://sam4web.github.io/results-summary-component/",
    },
    {
      id: "2ce9fb03",
      year: 2023,
      title: "socialated template",
      tools: ["html", "scss", "bootstrap", "jquery"],
      source: "https://github.com/sam4web/socialated-template",
      preview: "https://sam4web.github.io/socialated-template/",
    },
    {
      id: "ce06d79d",
      year: 2023,
      title: "state search",
      tools: ["react", "scss", "api"],
      source: "https://github.com/sam4web/state-search",
      preview: "https://sam4web.github.io/state-search/",
    },
    {
      id: "b861849f",
      year: 2023,
      title: "quickquiz",
      tools: ["react", "scss", "api"],
      source: "https://github.com/sam4web/quickquiz",
      preview: "https://sam4web.github.io/quickquiz/",
    },
    {
      id: "767a7a00",
      year: 2022,
      title: "xolcy template",
      tools: ["html", "scss", "bootstrap", "javascript", "jquery"],
      source: "https://github.com/sam4web/xolcy-template",
      preview: "https://sam4web.github.io/xolcy-template/",
    },
    {
      id: "9e76e052",
      year: 2022,
      title: "monst template",
      tools: ["html", "scss", "bootstrap", "javascript", "jquery"],
      source: "https://github.com/sam4web/monst-template",
      preview: "https://sam4web.github.io/monst-template/",
    },
    {
      id: "1301b2bb",
      year: 2022,
      title: "luaz template",
      tools: ["html", "scss", "javascript"],
      source: "https://github.com/sam4web/luaz-template",
      preview: "https://sam4web.github.io/luaz-template/",
    },
    {
      id: "d4b71173",
      year: 2022,
      title: "hously template",
      tools: ["html", "scss", "javascript"],
      source: "https://github.com/sam4web/hously-template",
      preview: "https://sam4web.github.io/hously-template/",
    },
    {
      id: "58e0da0e",
      year: 2022,
      title: "product survey form",
      tools: ["react", "scss"],
      source: "https://github.com/sam4web/product-survey-form",
    },
    {
      id: "77549c5c",
      year: 2022,
      title: "qr code component",
      tools: ["html", "css"],
      source: "https://github.com/sam4web/qr-code-component",
      preview: "https://sam4web.github.io/qr-code-component/",
    },
    {
      id: "022cf3bf",
      year: 2022,
      title: "nft preview card",
      tools: ["html", "css"],
      source: "https://github.com/sam4web/nft-preview-card",
      preview: "https://sam4web.github.io/nft-preview-card/",
    },
    {
      id: "2cbd8ca0",
      year: 2021,
      title: "3 column preview card",
      tools: ["html", "scss"],
      source: "https://github.com/sam4web/3-column-preview-card",
      preview: "https://sam4web.github.io/3-column-preview-card/",
    },
    {
      id: "2417e52f",
      year: 2021,
      title: "stats preview card",
      tools: ["html", "css"],
      source: "https://github.com/sam4web/stats-preview-card",
      preview: "https://sam4web.github.io/stats-preview-card/",
    },
    {
      id: "0788cb6c",
      year: 2021,
      title: "order summery card",
      tools: ["html", "css"],
      source: "https://github.com/sam4web/order-summery-card",
      preview: "https://sam4web.github.io/order-summery-card/",
    },
    {
      id: "de6910b6",
      year: 2024,
      title: "social links profile",
      tools: ["html", "css"],
      source: "https://github.com/sam4web/social-links-profile",
      preview: "https://sam4web.github.io/social-links-profile/",
    },
  ];

  return (
    <section className="h-full">
      <div className="wrapper mt-10">
        <div className="section-spacing">
          <div>
            <h1 className="main-title">Archieve</h1>
            <p className="paragraph-text">
              A big list of things I&#8217;ve worked on
            </p>
          </div>

          <table className="w-full table-auto">
            <thead>
              <tr className="text-left">
                <th className="table-header">Year</th>
                <th className="table-header">Title</th>
                <th className="md:block hidden table-header">Built with</th>
                <th className="table-header">Links</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <TableData project={project} key={project.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Archive;
