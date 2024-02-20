"use client";
import { FaUsers } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { TiHome } from "react-icons/ti";
import { IoCart } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { routes } from "./route";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";

export const data = [
  {
    title: "Main",
    datas: [
      {
        title: "home",
        icon: <TiHome size={20} />,
        url: routes.home,
      },
      {
        title: "dashboard",
        icon: <BiSolidDashboard size={20} />,
        url: routes.dashboard,
      },
    ],
  },
  {
    title: "List",
    datas: [
      {
        title: "Visitors",
        icon: <FaUsers size={20} />,
        url: routes.visitors,
      },
      {
        title: "Products",
        icon: <IoCart size={20} />,
        url: routes.products,
      },
    ],
  },
  {
    title: "Social",
    datas: [
      {
        title: "Github",
        icon: <FaGithubSquare size={20} />,
        url: "https://github.com/Samshad-Ali",
      },
      {
        title: "Portfolio",
        icon: <PiBagFill size={20} />,
        url: "https://samshad-ali-portfolio.netlify.app/",
      },
      {
        title: "LinkedIn",
        icon: <FaLinkedin size={20} />,
        url: "https://www.linkedin.com/in/samshad-ali-406525256/",
      },
    ],
  },
];
