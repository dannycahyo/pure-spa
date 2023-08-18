import NavigationMenu from "./Navigation";

const ProductPage = (props) => {
  const { onNavigateToHomePage, data } = props;
  const productHeading = document.createElement("h1");
  productHeading.textContent = "Hello From Product Page";

  const homeMenuButton = document.createElement("button");
  homeMenuButton.textContent = "Go to Home Page";
  homeMenuButton.addEventListener("click", () => {
    onNavigateToHomePage();
  });

  const productList = document.createElement("ul");

  data.products?.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.textContent = product.title;
    productList.appendChild(productItem);
  });

  const menuElement = NavigationMenu();

  const productPageElement = document.createElement("div");
  productPageElement.append(
    menuElement,
    homeMenuButton,
    productHeading,
    productList,
  );

  return productPageElement;
};

export default ProductPage;
