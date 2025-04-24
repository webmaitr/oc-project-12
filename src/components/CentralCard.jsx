import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getActivity } from '../data/GetData';


function CentralCard({ userId }) {
  const activity = getActivity(userId);

  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart width={730} height={250} data={activity}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis dataKey="kilogram" />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#282D30" barSize={7} />
        <Bar dataKey="calories" fill="#E60000" barSize={7} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default CentralCard