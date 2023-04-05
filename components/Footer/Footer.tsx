import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <div className="bg-gray-800 shadow-2xl flex flex-row h-20 gap-5 w-full p-6 text-slate-600 md:text-xl absolute bottom-0 mt-20">
      <a className="hover:text-slate-500 transition-all">
        WOW profile viewer 2023
      </a>

      <a
        className="hover:text-slate-500 hover:scale-125 transition-all hover:-translate-y-2"
        href="https://github.com/maciejszaman/WOWchecker"
      >
        <GitHubIcon />
      </a>
      {/* <a
        className="underline tracking-wide"
        href="https://docs.google.com/spreadsheets/d/12qFuGTj-azSTs17PwI30SXS7js8QQxitxX5bg3oajnM/edit?usp=sharing"
      >
        M+ Blacklist
      </a> */}
    </div>
  );
};
