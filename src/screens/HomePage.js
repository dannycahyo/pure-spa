import Link from "../components/Link";

const HomePage = () => {
  const homeHeading = document.createElement("h1");
  homeHeading.textContent = "Hello From Home Page";

  const productMenuButton = Link({
    href: "/product",
    label: "Go to Product Page",
  });

  const homePageElement = document.createElement("div");
  homePageElement.append(productMenuButton, homeHeading);

  return homePageElement;
};

export default HomePage;
