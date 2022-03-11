import React, { FC } from "react";
import { useAppSelector } from "../../app/hooks"; 
import { selectFirstName, selectLastName, selectMiddleNames, selectOtherNames, selectGender, selectPronouns, selectNationality, selectMemberships, selectBirthday, selectShowAge, selectShowBirthday } from '../../store/generalDetailsSlice';
import { selectMainHeadshot } from "../../store/imagesSlice";
import moment from "moment";

const MainPreview: FC = () => {
    const firstName = useAppSelector(selectFirstName);
    const lastName = useAppSelector(selectLastName);
    const middleNames = useAppSelector(selectMiddleNames);
    const otherNames = useAppSelector(selectOtherNames);
    const gender = useAppSelector(selectGender);
    const pronouns = useAppSelector(selectPronouns);
    const nationality = useAppSelector(selectNationality);
    const memberships = useAppSelector(selectMemberships);
    const birthday = useAppSelector(selectBirthday);
    const showAge = useAppSelector(selectShowAge);
    const showBirthday = useAppSelector(selectShowBirthday);
    const images = useAppSelector(selectMainHeadshot);

    const calcAge = (bdate: Date) => {
      const today = moment();
      const birthdate = moment(bdate);
      return today.diff(birthdate, 'years');
    }

    const displayAge = () => {
      const formatBirthday = moment(birthday).format('DD MMMM YYYY');
      const age = calcAge(birthday);
      if (showAge && showBirthday) {
        return <p>{formatBirthday} | {age}</p>
      } else if (showAge && !showBirthday) {
        return <p>{age}</p>
      } else if (!showAge && showBirthday) {
        return <p>{formatBirthday}</p>
      }
    }

  return (
    <div className="preview">
        <h2>{firstName} {middleNames.join(' ')} {lastName}</h2>
        <h3>{otherNames.join(', ')}</h3>
        <p>{gender} | {pronouns.join('/')}</p>
        <p>{nationality}</p>
        <ul>
          {memberships.map((item:string, index:number)=><li key={index}>{item}</li>)}
        </ul>
        {displayAge()}
        <img src={images.url} alt={images.alt} />
    </div>
  );
};

export default MainPreview;
