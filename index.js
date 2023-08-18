import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";

import { getProductData } from "./fetcher/getProductData";

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
          throw new Error(error);
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

function App() {
  const homePage = HomePage({
    onNavigetoProduct: () => setState({ pathURLName: "/product" }),
  });
  const productPage = ProductPage({
    productData: state.productData,
    onNavigateToHomePage: () => setState({ pathURLName: "/" }),
  });

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
