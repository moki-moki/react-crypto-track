import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div>
        <h1>404... Something went wrong :(</h1>
        <p>
          Go back <Link to="/react-crypto-tracker/">here</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
