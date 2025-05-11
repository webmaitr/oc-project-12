import { PieChart, Pie, ResponsiveContainer } from 'recharts';

function Score({ userInfo }) {
  const dataScore = userInfo.todayScore
    ? [{ userScore: userInfo.todayScore }]
    : [{ userScore: userInfo.score }];
  const fakeScore = [{ fakeUserScore: 1 }];
  const ratioScore = 230 - dataScore[0].userScore * 360;
  return (
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
  );
}

export default Score;
