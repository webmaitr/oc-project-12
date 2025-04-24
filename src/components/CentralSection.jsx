import Welcome from './Welcome';
import { getFirstname } from '../data/GetData.jsx';
import userInfoFetch from '../data/GetDataFetch.js';
import DataDisplay from './DataDisplay';
import { useContext, useEffect, useState } from 'react';
import { IdContext } from './IdContext.jsx';


function CentralSection() {
  const { userId } = useContext(IdContext);
  const [firstName, setFirstName] = useState(null);

  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await userInfoFetch.getData(userId);
        const userInfo = data.data;
        console.log(userInfo);
        const { id, userInfos, todayScore, keydata } = userInfo;
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