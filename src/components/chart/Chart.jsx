import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Chart() {

    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
        },
        {
          name: 'Feb',
          "Active User": 3000,

        },
        {
          name: 'Jun',
          "Active User": 2000,

        },
        {
          name: 'Jul',
          "Active User": 2780,

        },
        {
          name: 'Aug',
          "Active User": 1890,

        },
        {
          name: 'Sep',
          "Active User": 2390,

        },
        {
          name: 'Oct',
          "Active User": 3490,

        },
        {
            name: 'Nov',
            "Active User": 3490,

          },
          {
            name: 'Dec',
            "Active User": 3490,

          },
      ];


    return (

    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#3e4a61"/>
            <Line type="monotone" dataKey="Active User" stroke="darkblue" />
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
}
