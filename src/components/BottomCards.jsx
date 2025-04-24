import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';
import { RadialBarChart, RadialBar,} from 'recharts';
import { getAverageSession, getPerformance, getFirstname } from '../data/GetData';



const data3 = [
  {
  
    uv: 12,
  

  },
  
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};



function BottomCards({ userId }) {
  const averageSessions = getAverageSession(userId);
  const performances = getPerformance(userId);
  const score = getFirstname(userId).userScore;
  return (
    <>
    <div className={`bottomcards sessions`}>
      <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={averageSessions}>
            <Legend verticalAlign="top" />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#000000"
              strokeWidth={2}
              dot={false}
              activedot={true}
              name="Durée moyenne des sessions"
            />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
      </LineChart>
     
      </ResponsiveContainer>
    </div>
    <div className={`bottomcards perf`}>
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performances}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
    <div className={`bottomcards score`}>
    <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={score}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="myScore"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
    </>
)

}
export default BottomCards;