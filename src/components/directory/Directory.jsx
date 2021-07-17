import React from "react";
import section from "./directoryData";
import "./directoryStyle.scss";
import MenuItem from "../menu-item/MenuItem";

const Directory = () => {
  return (
    <div className="directory-menu">
      {section.map(({ title, id, imageUrl, linkUrl, size }) => (
        <MenuItem
          key={id}
          title={title.toLocaleUpperCase()}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};
export default Directory;
