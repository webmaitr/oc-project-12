import Welcome from './Welcome.jsx';
import CentralCard from './CentralCard.jsx';
import BottomCards from './BottomCards.jsx';
import RightSideCards from './RightSideCards.jsx';
import { useState, useContext, useEffect } from 'react';
import { IdContext } from '../components/IdContext.jsx';
import './../styles/dataDisplay.css';
import { getData } from './../data/GetData.js';

function DataDisplay() {
  const { userId } = useContext(IdContext);
  const [info, setInfo] = useState(null);
  const [activity, setActivity] = useState(null);
  const [sessions, setSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getData(userId);
        setInfo(userData.info);
        setActivity(userData.activity);
        setSessions(userData.sessions);
        setPerformance(userData.performance);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [userId]);
  if (!info || !activity || !sessions || !performance) {
    return;
  }

  return (
    <>
      <Welcome firstName={info.userInfos.firstName} />
      <div className="display-chart-area">
        <CentralCard userActivity={activity.sessions} />
        <RightSideCards userKeyData={info.keyData} />
        <BottomCards
          userInfo={info}
          userPerformance={performance}
          userSessions={sessions}
          userActivity={activity}
        />
      </div>
    </>
  );
}

export default DataDisplay;
