import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-row h-20 gap-5 w-full justify-evenly p-6 text-neutral-700 md:text-xl text-base absolute bot-0 bg-neutral-800">
      <a>WOW-checker 2023</a>
      <a
        className="underline tracking-wide"
        href="https://github.com/maciejszaman/WOWchecker"
      >
        Github
      </a>
      <a
        className="underline tracking-wide"
        href="https://docs.google.com/spreadsheets/d/12qFuGTj-azSTs17PwI30SXS7js8QQxitxX5bg3oajnM/edit?usp=sharing"
      >
        M+ Blacklist
      </a>
    </div>
  );
};
