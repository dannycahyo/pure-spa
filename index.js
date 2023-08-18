import Router from "./routes/Router";
import { routes } from "./routes/routes";

const rootElement = document.getElementById("root");

function renderComponent(component) {
  rootElement.innerHTML = "";
  rootElement.append(component);
}

const props = {
  onNavigateToProductPage: () => {
    router.router.push("/product");
  },
  onNavigateToHomePage: () => router.router.push("/"),
};

const router = Router(routes, renderComponent, props);

router.render();
