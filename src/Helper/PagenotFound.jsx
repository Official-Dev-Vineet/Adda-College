import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col gap-md mx-auto align-center justify-center shadow-3d-light mt radius-1 padding-md max-w t-danger">
      <h3>PageNotFound</h3>
      <Link to="/">Go to back</Link>
    </div>
  );
};

export default PageNotFound;
