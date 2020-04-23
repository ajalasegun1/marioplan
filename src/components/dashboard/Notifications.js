import React from "react";
import moment from "moment"
function Notifications(props) {
    const {notifications} = props;
  return (
    <div>
      <div
        className="white center teal-text z-depth-1"
        style={{ padding: "5px" }}
      >
        <h5>Notifications</h5>
      </div>

      <div className="card">
        <div className="card-content">
          <ul className="notifications">
              {notifications && notifications.map(item => {
                  return (
                  <li key={item.id}>
                      <span className="pink-text">{item.content}</span>
                      <div className="grey-text note-date">
                       { moment(item.time.toDate()).fromNow()}
                      </div>
                  </li>
                  )
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
