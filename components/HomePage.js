const HomePage = (props) => {
  const homeHeading = document.createElement("h1");
  homeHeading.textContent = "Hello From Home Page";

  const productMenuButton = document.createElement("button");
  productMenuButton.textContent = "Go to Product Page";
  productMenuButton.addEventListener("click", () => {
    props.onNavigetoProduct();
  });

  const homePageElement = document.createElement("div");
  homePageElement.append(productMenuButton, homeHeading);

  return homePageElement;
};

export default HomePage;
