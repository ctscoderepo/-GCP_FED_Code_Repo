import React from "react";
import ExpansionPanel from "../helpers/ExpansionPanel";
import "./index.css";

export default () => {
  return (
    <>
      <ExpansionPanel
        heading="Electronics"
        content={[
          { id: 4, cat: "All", path: "Electronics" },
          { id: 1, cat: "Camera & Photo", path: "Electronics" },
          { id: 2, cat: "Cell phones", path: "Electronics" },
          { id: 3, cat: "Others", path: "Electronics" }
        ]}
      />
      <ExpansionPanel
        heading="Apparel"
        content={[
          { id: 4, cat: "All", path: "Apparel" },
          { id: 1, cat: "Accessories", path: "Apparel" },
          { id: 2, cat: "Shoes", path: "Apparel" },
          { id: 3, cat: "Clothing", path: "Apparel" }
        ]}
      />
      <ExpansionPanel
        heading="Home Decor"
        content={[
          { id: 4, cat: "All", path: "Home Decor" },
          { id: 1, cat: "Art prints", path: "Home decor" },
          { id: 2, cat: "Lighting", path: "Home decor" },
          { id: 3, cat: "Decorative Bottles", path: "Home decor" }
        ]}
      />
      <ExpansionPanel
        heading="Toys"
        content={[
          { id: 5, cat: "All ", path: "Toys" },
          { id: 1, cat: "Shapes & Colors", path: "Toys" },
          { id: 2, cat: "Kid's Electronics", path: "Toys" },
          { id: 3, cat: "Sports & Outdoor play", path: "Toys" },
          { id: 4, cat: "Stuffed Animals & Plush Toys", path: "Toys" }
        ]}
      />
      <ExpansionPanel heading="Gift Cards" content={[]} />
    </>
  );
};
