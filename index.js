import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
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

export function setState(newState) {
  const prevState = { ...state };
  const updatedState = { ...prevState, ...newState };
  state = updatedState;
  onStateChange(prevState, updatedState);
  renderElement();
}

function App() {
  const navigationMenu = Navigation();
  const homePage = HomePage();
  const productPage = ProductPage({
    productData: state.productData,
  });

  const app = document.createElement("div");
  app.append(navigationMenu);

  switch (state.pathURLName) {
    case "/":
      app.append(homePage);
      break;
    case "/product":
      app.append(productPage);
      break;
  }

  return app;
}

setState({ pathURLName: window.location.pathname });

function renderElement() {
  const app = App();
  rootElement.innerHTML = "";
  rootElement.append(app);
}

renderElement();
