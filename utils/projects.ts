import { v4 as uuidv4 } from "uuid";
export const projectData = [
  {
    id: 1,
    url: "https://retailcore-mfe-root-config.dev.bepeerless.co/",
    title: "Sterling Retailcore Banking App",
    imgUrl: `${process.env.NEXT_PUBLIC_ASSETS}/v1691717080/Portfolio/Sterling_retailcore_dashboard_dcthx8.png`,
    description: "This is the official Sterling Retailcore website",
    skills: [
      "Material UI",
      "TailwindCss",
      "HTML",
      "Typescript",
      "React",
      "Redux",
    ],
  },
  {
    id: 2,
    url: "https://prunedge.com/",
    title: "Prunedge - Business Page",
    imgUrl: `${process.env.NEXT_PUBLIC_ASSETS}/v1691852803/Portfolio/prunedge_p5v0cx.png`,
    description:
      "Prunedge devlops technologies around Cloud Solutions, Data Analytics & AI, Internet of Things, Cybersecurity, Hardware & Infrastructure.",
    skills: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    id: 3,
    url: "https://booosta-dev.netlify.app/",
    title: "Boosta - Retail Management",
    imgUrl: `${process.env.NEXT_PUBLIC_ASSETS}/v1691852853/Portfolio/Boosta_snip_dvhyls.png`,
    description:
      "A Retail management system that caters for Inventory management, field agents placement, Dashboard Visualization of inflow and outflow of stock",
    skills: ["Material UI", "HTML", "React", "TypeScript", "React Query", "React Hook Form"],
  },
  {
    id: 4,
    url: "https://polleasy-staging.netlify.app/",
    title: "PollEasy",
    imgUrl: `${process.env.NEXT_PUBLIC_ASSETS}/v1691852422/Portfolio/PollEasy_dashboard_kvxxhr.png`,
    description:
      "A platform for monitoring elections across various wards, units down to State level",
    skills: ["Material UI", "HTML", "Javascript", "React", "React Query", "React Hook Form"],
  },
  {
    id: 5,
    url: "https://olamz.vercel.app",
    title: "Portfolio",
    imgUrl: `${process.env.NEXT_PUBLIC_ASSETS}/v1693530722/Portfolio/portfolio_shot_y62dy0.png`,
    description:
      "Just a portfolio app, that shows all my projects, I bet you're currently viewing it",
    skills: ["TailwindCss", "HTML", "Typescript", "Nextjs"],
  }
];
