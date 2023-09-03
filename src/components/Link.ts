import { setState } from "../index";
import { routes } from "../../routes";

type LinkProps = {
  href: string;
  label: string;
};

const Link = ({ href, label }: LinkProps): HTMLAnchorElement => {
  const currentRoute = routes.find((route) => route.path === href);

  const linkElement = document.createElement("a");
  linkElement.href = href;
  linkElement.textContent = label;

  if (currentRoute) {
    linkElement.onclick = (event) => {
      if (!currentRoute.isServerPage) {
        event.preventDefault();
        setState({ pathURLName: currentRoute.path });
      }
    };
  }

  return linkElement;
};

export default Link;
