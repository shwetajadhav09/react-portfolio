import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaInstagram,
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
  JavaScriptProject,
  ecommerce

} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uri: "",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/shweta-jadhav-460548228?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bz8XGzvKpSxKQuhoYbDzGzw%3D%3D",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/shwetajadhav09",
    color: "#fff",
  },
  {
    id: `instagram-${Date.now()}`,
    Icon: FaInstagram,
    uri: "",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  
  {
    id: `ecommerce-${Date.now()}`,
    name: "Ecommerce Website",
    imgSrc: ecommerce,
    gitURL: "https://github.com/shwetajadhav09/mernBackend",
  },

  {
    id: `javascript-${Date.now()}`,
    name: "HTML/CSS/JAVASCRIPT projects",
    imgSrc: JavaScriptProject,
    gitURL: "https://github.com/shwetajadhav09/html-css-js-projects",
  },
];
