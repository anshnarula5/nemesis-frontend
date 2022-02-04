import React from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const alerts = useSelector((state) => state.alert);
  return (
    <>
      {alerts !== null &&
        alerts.length !== 0 &&
        alerts.map((alert) => (
          <div
            className={`alert alert-${alert.type} text-center mt-5 w-25 mx-auto p-2 `}
            key={Math.random()}
            role="alert"
            style={{ position: "absolute", left: "33rem", zIndex: 100000000 }}
          >
            {alert.message}
          </div>
        ))}
    </>
  );
};

export default Alert;
