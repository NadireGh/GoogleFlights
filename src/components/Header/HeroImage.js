import React from "react";

const HeroImage = () => {
  return (
    <img
      style={{
        borderRadius: "16px",
        height: "320px",
        margin: "0 calc(76px - 56px)",
        minWidth: "calc(852px + 112px)",
        width: "calc(100% - 40px)"
      }}
      src="http://t1.gstatic.com/images?q=tbn:ANd9GcTh3UEZ2QwOFZ5YzB7a4xtQkNW_y8PoSa5IcxKQ3_hIHfwvKU_M"
    />
  );
};

export default HeroImage;
