import Welcome from './Welcome';
import { getUserData } from '../data/GetDataFetch.js';
import DataDisplay from './DataDisplay';
import { useContext, useEffect, useState } from 'react';
import { IdContext } from './IdContext.jsx';


function CentralSection() {
  const { userId, mock } = useContext(IdContext);
  const [firstName, setFirstName] = useState(null);
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const info = await getUserData(userId, mock);
        const { userInfos } = info;
        setFirstName(userInfos.firstName);
      } catch (error) {
        console.error(error);
      } 
    };

    fetchData();
  });

  return(
      <section className="central-section">
        <Welcome firstName={firstName} />
        <DataDisplay />
      </section>

  );
}

export default CentralSection;