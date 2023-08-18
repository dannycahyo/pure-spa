import NavigationMenu from "./Navigation";

const HomePage = (props) => {
  const homeHeading = document.createElement("h1");
  homeHeading.textContent = "Hello From Home Page";

  const productMenuButton = document.createElement("button");
  productMenuButton.textContent = "Go to Product Page";
  productMenuButton.addEventListener("click", () => {
    props.onNavigateToProductPage();
  });

  const menuElement = NavigationMenu();

  const homePageElement = document.createElement("div");
  homePageElement.append(menuElement, productMenuButton, homeHeading);

  return homePageElement;
};

export default HomePage;
