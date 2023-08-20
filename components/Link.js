import { setState } from "../index.js";
import { routes } from "../routes.js";

const Link = ({ href, label }) => {
  const currentRoute = routes.find((route) => route.path === href);

  if (currentRoute) {
    const element = document.createElement("a");
    element.href = href;
    element.textContent = label;
    element.onclick = (event) => {
      if (!currentRoute.isServerPage) {
        event.preventDefault();
        setState({ pathURLName: currentRoute.path });
      }
    };
    return element;
  } else {
    return null;
  }
};

export default Link;
