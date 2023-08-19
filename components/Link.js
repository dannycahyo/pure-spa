import { setState } from "../index.js";
import { routes } from "../routes.js";

const Link = ({ href, label }) => {
  let element;

  const currentRoute = routes.find((route) => route.path === href);

  if (currentRoute) {
    if (currentRoute.isServerPage) {
      element = document.createElement("a");
      element.href = href;
      element.textContent = label;
    } else {
      element = document.createElement("button");
      element.textContent = label;
      element.onclick = () => {
        setState({ pathURLName: currentRoute.path });
      };
    }
  }

  return element;
};

export default Link;
