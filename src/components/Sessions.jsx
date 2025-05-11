import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Sessions({ userSessions, userActivity }) {
  const translateD = ['D', 'L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const dataSessions = [];
  for (let i = 0; i < userSessions.sessions.length; i++) {
    let date = new Date(userActivity.sessions[i].day);
    let day = date.getDay();
    let dDay = translateD[day];
    let data = {
      day: dDay,
      sessionLength: userSessions.sessions[i].sessionLength,
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

  return (
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
  );
}

export default Sessions;
