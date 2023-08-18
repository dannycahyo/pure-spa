const rootElement = document.getElementById("root");

let state = {
  pathURLName: undefined,
  productData: [],
};

function onStateChange(prevState, nextState) {
  if (prevState.pathURLName !== nextState.pathURLName) {
    window.history.pushState({}, "", nextState.pathURLName);
    if (nextState.pathURLName === "/product") {
      getProductData()
        .then((data) => {
          setState({ productData: data.products });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}

function setState(newState) {
  const prevState = { ...state };
  const updatedState = { ...prevState, ...newState };
  state = updatedState;
  onStateChange(prevState, updatedState);
  renderElement();
}

const getProductData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const HomePage = () => {
  const homeHeading = document.createElement("h1");
  homeHeading.textContent = "Hello From Home Page";

  const productMenuButton = document.createElement("button");
  productMenuButton.textContent = "Go to Product Page";
  productMenuButton.addEventListener("click", () => {
    setState({ pathURLName: "/product" });
  });

  const homePageElement = document.createElement("div");
  homePageElement.append(productMenuButton, homeHeading);

  return homePageElement;
};

const ProductPage = () => {
  const productHeading = document.createElement("h1");
  productHeading.textContent = "Hello From Product Page";

  const homeMenuButton = document.createElement("button");
  homeMenuButton.textContent = "Go to Home Page";
  homeMenuButton.addEventListener("click", () => {
    setState({ pathURLName: "/" });
  });

  const productList = document.createElement("ul");

  if (state.productData) {
    state.productData.forEach((product) => {
      const productItem = document.createElement("li");
      productItem.textContent = product.title;
      productList.appendChild(productItem);
    });
  }

  const productPageElement = document.createElement("div");
  productPageElement.append(homeMenuButton, productHeading, productList);

  return productPageElement;
};

function App() {
  const homePage = HomePage();
  const productPage = ProductPage();

  console.log(state);

  switch (state.pathURLName) {
    case "/":
      return homePage;
    case "/product":
      return productPage;
    default:
      return homePage;
  }
}

setState({ pathURLName: window.location.pathname });

function renderElement() {
  const app = App();
  rootElement.innerHTML = "";
  rootElement.append(app);
}

renderElement();
