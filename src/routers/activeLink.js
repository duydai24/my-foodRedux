import { useRouter } from "next/router";
import { ROUTER } from "./router";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    color: router.asPath === href ? "red" : "white",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
