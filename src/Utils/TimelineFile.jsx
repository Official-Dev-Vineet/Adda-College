import "./timeline.css";
import PropTypes from "prop-types";

const TimelineFile = ({ timelines }) => {
  return (
    <div className="timeline">
      <ul>
        {timelines?.map((timeline, index) => {
          return (
            <li key={index}>
              <div className="right_content">
                <h2>{timeline?.title}</h2>
                <p className="t-bold">{timeline?.description}</p>
              </div>
              <div className="left_content">
                <h3>{timeline?.date}</h3>
              </div>
            </li>
          );
        })}
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default TimelineFile;
TimelineFile.propTypes = {
  timelines: PropTypes.array.isRequired,
};
