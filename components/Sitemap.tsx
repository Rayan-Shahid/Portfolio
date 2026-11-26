"use client";

import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home section", link: "#home" },
  { label: "Skills", ariaLabel: "View my skills", link: "#my-stack" },
  {
    label: "Experience",
    ariaLabel: "View my experience",
    link: "#my-experience",
  },
  {
    label: "Projects",
    ariaLabel: "View my projects",
    link: "#selected-projects",
  },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/Rayan-Shahid" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/rayan-shahid-dev/" },
  { label: "Email", link: "mailto:rayanshahid.dev@gmail.com" },
];

export default function SiteMenu() {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div className="pointer-events-none h-full">
        <StaggeredMenu
          position="right"
          isFixed={true}
          items={menuItems as never[]}
          socialItems={socialItems as never[]}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#111111"
          changeMenuColorOnOpen={true}
          colors={["#01afff"]}
          accentColor="#09b1ff"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>
    </div>
  );
}
