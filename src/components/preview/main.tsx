import React, { FC } from "react";
import { useAppSelector } from "../../app/hooks"; 
import { selectFirstName } from '../../store/generalDetailsSlice';

const MainPreview: FC = () => {
    const firstName = useAppSelector(selectFirstName);

  return (
    <>
        <h2>{firstName}</h2>
    </>
  );
};

export default MainPreview;
