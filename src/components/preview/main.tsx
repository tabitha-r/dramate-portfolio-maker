import React, { FC } from "react";
import { useAppSelector } from "../../app/hooks"; 
import { selectFirstName } from '../../store/generalDetailsSlice';
import { selectMainHeadshot } from "../../store/imagesSlice";

const MainPreview: FC = () => {
    const firstName = useAppSelector(selectFirstName);
    const images = useAppSelector(selectMainHeadshot);

  return (
    <div className="preview">
        <h2>{firstName}</h2>
        <img src={images.url} alt={images.alt} />
    </div>
  );
};

export default MainPreview;
