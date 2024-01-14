import React from "react";

const Loading = ({ Loading, error, children }) => {
  return (
    <>{Loading ? <tr>Loading</tr> : error ? <tr>{error}</tr> : children}</>
  );
};

export default Loading;
