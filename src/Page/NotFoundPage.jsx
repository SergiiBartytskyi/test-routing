import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Not Found Page!</h1>
      <p>
        Back to <Link to="/">Home</Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
