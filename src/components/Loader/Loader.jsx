import HashLoader from "react-spinners/HashLoader";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.container}>
      <HashLoader color="#2615ff" />
    </div>
  );
};
export default Loader;
