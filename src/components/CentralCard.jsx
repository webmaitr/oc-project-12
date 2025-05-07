import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { getUserActivity } from './../data/GetDataFetch.js';
import { useContext, useState, useEffect } from 'react';
import { IdContext } from './IdContext.jsx';

function CentralCard() {
  const { userId, mock } = useContext(IdContext);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserActivity(userId, mock);
        setActivity(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [userId, mock]);
  if (!activity) {
    return;
  }
  const userSessions = activity.sessions;

  const modifData = [];
  for (let i = 0; i < userSessions.length; i++) {
    let data = {
      kilogram: userSessions[i].kilogram,
      calories: userSessions[i].calories,
      day: i + 1
    };
    modifData.push(data);
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="label">{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <h3>Activité quotidienne</h3>
      <BarChart width={730} data={modifData}>
        <CartesianGrid strokeDasharray="1" vertical={false} fill="#fbfbfb" />
        <XAxis tickLine={false} dataKey="day" />
        <YAxis
          yAxisId="right"
          orientation="right"
          tickLine={false}
          axisLine={false}
          domain={[65, 85]}
          dataKey="kilogram"
        />
        <YAxis
          yAxisId="left"
          hide={true}
          domain={[150, 400]}
          dataKey="calories"
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: 'transparent' }}
          wrapperStyle={{
            backgroundColor: '#e60000',
            border: '1px solid #ccc',
            padding: '10px',
            color: '#fff'
          }}
        />
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          iconSize={7}
        />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[10, 10, 0, 0]}
          name="Poids (kg)"
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[10, 10, 0, 0]}
          name="Calories brûlées (kCal)"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CentralCard;
