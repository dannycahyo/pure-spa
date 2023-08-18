const ProductPage = (props) => {
  const productHeading = document.createElement("h1");
  productHeading.textContent = "Hello From Product Page";

  const homeMenuButton = document.createElement("button");
  homeMenuButton.textContent = "Go to Home Page";
  homeMenuButton.addEventListener("click", () => {
    props.onNavigateToHomePage();
  });

  const productList = document.createElement("ul");

  if (props.productData) {
    props.productData.forEach((product) => {
      const productItem = document.createElement("li");
      productItem.textContent = product.title;
      productList.appendChild(productItem);
    });
  }

  const productPageElement = document.createElement("div");
  productPageElement.append(homeMenuButton, productHeading, productList);

  return productPageElement;
};

export default ProductPage;
