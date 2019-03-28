import React from "react";

export default ({ data }) => {
  if (!data) return <div style={{ marginTop: "150px" }}> No data found</div>;
  if (data && data.length === 0)
    return <div style={{ marginTop: "150px" }}>Loading......</div>;
  return (
    <div style={{ marginTop: "150px" }}>
      {data.map(item => (
        <li>{item.name}</li>
      ))}
    </div>
  );
};
