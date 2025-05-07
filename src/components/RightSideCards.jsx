import SideCard from './SideCard';
import caloriesIcon from './../assets/caloriesIcon.svg';
import proteinIcon from './../assets/proteinIcon.svg';
import carbsIcon from './../assets/carbsIcon.svg';
import fatIcon from './../assets/fatIcon.svg';
import { getUserData } from './../data/GetDataFetch.js';
import { useContext, useEffect, useState } from 'react';
import { IdContext } from './IdContext.jsx';

function RightSideCards() {
  const { userId, mock } = useContext(IdContext);
  const [userInfos, setUserInfos] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserData(userId, mock);
        setUserInfos(data.keyData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [userId, mock]);

  if (!userInfos) {
    return;
  }
  return (
    <div className="sideCardArea">
      <SideCard
        icon={caloriesIcon}
        category="Calories"
        score={userInfos.calorieCount}
      />
      <SideCard
        icon={proteinIcon}
        category="Proteines"
        score={userInfos.proteinCount}
      />
      <SideCard
        icon={carbsIcon}
        category="Glucides"
        score={userInfos.carbohydrateCount}
      />
      <SideCard
        icon={fatIcon}
        category="Lipides"
        score={userInfos.lipidCount}
      />
    </div>
  );
}
export default RightSideCards;
