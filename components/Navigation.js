const Navigation = () => {
  const aboutLink = document.createElement("a");
  aboutLink.href = "/about";
  aboutLink.textContent = "About";
  aboutLink.style.marginRight = "10px";

  const portfolioLink = document.createElement("a");
  portfolioLink.href = "/portfolio";
  portfolioLink.textContent = "Portfolio";

  const navigationParentElement = document.createElement("nav");
  navigationParentElement.appendChild(aboutLink);
  navigationParentElement.appendChild(portfolioLink);
  navigationParentElement.style.marginBottom = "10px";

  return navigationParentElement;
};

export default Navigation;
