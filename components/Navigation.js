import Link from "./Link";

const Navigation = () => {
  const aboutLink = Link({
    href: "/about",
    label: "About",
  });
  aboutLink.style.marginRight = "10px";

  const portfolioLink = Link({
    href: "/portfolio",
    label: "Portfolio",
  });

  const navigationParentElement = document.createElement("nav");
  navigationParentElement.appendChild(aboutLink);
  navigationParentElement.appendChild(portfolioLink);
  navigationParentElement.style.marginBottom = "10px";

  return navigationParentElement;
};

export default Navigation;
