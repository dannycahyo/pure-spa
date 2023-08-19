import Link from "./Link";

const ProductPage = (props) => {
  const productHeading = document.createElement("h1");
  productHeading.textContent = "Hello From Product Page";

  const homeMenuButton = Link({
    href: "/",
    label: "Go to Home Page",
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
