import { useRouteError } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
const ErrorDetails = () => {
  const error = useRouteError();
  return (
    <div
      className="shadow-3d-light padding-md radius-1 tac  abs-center max-w flex flex-col align-center gap-sm"
      style={{ "--mwValue": 100 }}
    >
      <BiErrorCircle size="5rem" />
      <p>Sorry, an unexpected error has occurred.</p>
      <strong className="block t-danger t-balance">
        {error.statusText || error.message}
      </strong>
    </div>
  );
};

export default ErrorDetails;
