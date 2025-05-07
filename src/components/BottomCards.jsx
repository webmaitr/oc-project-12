import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { PieChart, Pie } from 'recharts';
import {
  getUserSessions,
  getUserPerformance,
  getUserData,
  getUserActivity
} from '../data/GetDataFetch.js';
import { useContext, useEffect, useState } from 'react';
import { IdContext } from './IdContext.jsx';

{
  /* getting the data */
}
function BottomCards() {
  const { userId, mock } = useContext(IdContext);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performances, setPerformances] = useState(null);
  const [score, setScore] = useState(null);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data1 = await getUserSessions(userId, mock);
        const data2 = await getUserPerformance(userId, mock);
        const data3 = await getUserData(userId, mock);
        const data4 = await getUserActivity(userId, mock);

        setAverageSessions(data1);
        setPerformances(data2);
        setScore(data3);
        setActivity(data4);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [userId, mock]);
  if (!averageSessions || !performances || !score || !activity) {
    return;
  }

  {
    /* modifying the data to fit recharts and figma */
  }

  const translateD = ['D', 'L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const dataSessions = [];
  for (let i = 0; i < averageSessions.sessions.length; i++) {
    let date = new Date(activity.sessions[i].day);
    let day = date.getDay();
    let dDay = translateD[day];
    let data = {
      day: dDay,
      sessionLength: averageSessions.sessions[i].sessionLength,
      unit: 'min'
    };
    dataSessions.push(data);
  }
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  const dataPerf1 = [];
  const kindFrench = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité'
  ];
  for (let i = 0; i <= 5; i++) {
    let data = { value: performances.data[i].value, kind: kindFrench[i] };
    dataPerf1.push(data);
  }
  const dataPerf = dataPerf1.reverse();

  const dataScore = score.todayScore
    ? [{ userScore: score.todayScore }]
    : [{ userScore: score.score }];
  const fakeScore = [{ fakeUserScore: 1 }];
  console.log(score);
  console.log(dataScore[0].userScore);
  const ratioScore = 230 - dataScore[0].userScore * 360;
  console.log(ratioScore);

  console.log(dataScore);

  return (
    <>
      <div className={`bottomcards sessions`}>
        <ResponsiveContainer width="100%" height="100%">
          <h3>Durée moyenne des sessions</h3>
          <LineChart width={300} height={100} data={dataSessions}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              padding={{ right: 5, left: 5 }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
              wrapperStyle={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                padding: '0 10px'
              }}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#fff"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5, fill: '#fff' }}
              name="Durée moyenne des sessions"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={`bottomcards perf`}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="70%"
            startAngle={90}
            endAngle={-270}
            data={dataPerf}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" tickLine={false} />
            <Radar
              dataKey="value"
              stroke="#ffffff"
              fill="#FF0101"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className={`bottomcards score`}>
        <ResponsiveContainer width="100%" height="100%">
          <h3>Score</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={fakeScore}
              dataKey="fakeUserScore"
              cx="50%"
              cy="40%"
              innerRadius={0}
              outerRadius={70}
              fill="#fff"
              startAngle={0}
              endAngle={360}
            />
            <Pie
              data={dataScore}
              dataKey="userScore"
              cx="50%"
              cy="40%"
              innerRadius={70}
              outerRadius={80}
              fill="#ff0000"
              startAngle={230}
              endAngle={ratioScore}
              cornerRadius={20}
            />
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={26}
              fontWeight="bold"
            >
              {dataScore[0].userScore * 100}%
            </text>
            <text
              className="score-text"
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={16}
              fontWeight="bold"
              fill={'#74798c'}
              width={95}
            >
              de votre objectif
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
export default BottomCards;
