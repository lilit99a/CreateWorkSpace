import React from "react";
import style from "./style.module.css";
import image from "../images/picOne.png";

const CreateWorkSpace = () => {
  return (
    <div className={style.textCreateYouAndPic}>
      <div>
        <p className={style.textCreateYou}>
          Create you
          <br /> workSpace Easily
          <br />
          Integreted
        </p>
        <p className={style.textLoremIpsum}>
          Lorem Ipsum is simply dummy text of the printing
          <br /> and typesetting industry.{" "}
        </p>

        <button className={style.learnMoreButton}>Learn more</button>
        <button className={style.whatchVideo}>Whatch video</button>
      </div>
      <div>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

CreateWorkSpace.propTypes = {};

export default CreateWorkSpace;
