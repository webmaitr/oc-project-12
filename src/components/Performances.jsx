import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts';

function Performances({ userPerformance }) {
  console.log(userPerformance);
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
    let data = { value: userPerformance.data[i].value, kind: kindFrench[i] };
    dataPerf1.push(data);
  }
  const dataPerf = dataPerf1.reverse();
  return (
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
  );
}

export default Performances;
