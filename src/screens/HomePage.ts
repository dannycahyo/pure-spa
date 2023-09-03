import Link from "../components/Link";

const HomePage = (): HTMLDivElement => {
  const homeHeading = document.createElement("h1");
  homeHeading.textContent = "Hello From Home Page BOSS!";

  const productMenuButton = Link({
    href: "/product",
    label: "Go to Product Page",
  });

  const homePageElement = document.createElement("div");
  homePageElement.append(productMenuButton, homeHeading);

  return homePageElement;
};

export default HomePage;
