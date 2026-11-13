"use client";

import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home section", link: "#home" },
  { label: "Skills", ariaLabel: "View my skills", link: "#skills" },
  { label: "Experience", ariaLabel: "View my experience", link: "#experience" },
  { label: "Projects", ariaLabel: "View my projects", link: "#projects" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/Rayan-Shahid" },
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "Twitter", link: "https://twitter.com" },
];

export default function SiteMenu() {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div className="pointer-events-auto h-full">
        <StaggeredMenu
          position="right"
          isFixed={true}
          items={menuItems as never[]}
          socialItems={socialItems as never[]}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#00227e", "#07c400"]}
          logoUrl="/path-to-your-logo.svg"
          accentColor="#5227FF"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>
    </div>
  );
}
