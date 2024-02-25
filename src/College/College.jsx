import { useParams } from "react-router-dom";

const College = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default College;
