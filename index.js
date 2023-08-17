const rootElement = document.getElementById("root");

const renderHomePage = () => {
  const homeHeading = document.createElement("h1");
  homeHeading.textContent = "Hello From Home Page";

  const productMenuButton = document.createElement("button");
  productMenuButton.textContent = "Go to Product Page";
  productMenuButton.addEventListener("click", () => {
    window.history.pushState(null, "Product", "/product");
    handlePageChange();
  });

  const homePageElement = document.createElement("div");
  homePageElement.append(productMenuButton, homeHeading);

  rootElement.append(homePageElement);
};

const getProductData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const renderProductPage = () => {
  const productHeading = document.createElement("h1");
  productHeading.textContent = "Hello From Product Page";

  const homeMenuButton = document.createElement("button");
  homeMenuButton.textContent = "Go to Home Page";
  homeMenuButton.addEventListener("click", () => {
    window.history.pushState(null, "Home", "/");
    handlePageChange();
  });

  const productList = document.createElement("ul");
  const productDataPromise = getProductData();

  productDataPromise.then((data) =>
    data.products.forEach((product) => {
      const productElement = document.createElement("li");
      productElement.textContent = product.title;
      productList.append(productElement);
    }),
  );

  const productPageElement = document.createElement("div");
  productPageElement.append(homeMenuButton, productHeading, productList);

  rootElement.append(productPageElement);
};

function handlePageChange() {
  if (window.location.pathname === "/") {
    rootElement.innerHTML = "";
    renderHomePage();
  } else if (window.location.pathname === "/product") {
    rootElement.innerHTML = "";
    renderProductPage();
  }
}

handlePageChange();
