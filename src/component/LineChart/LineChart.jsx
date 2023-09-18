
import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';


const LineChart = () => {

    const mathMarksData = [
        {
          id: 1,
          name: "John",
          mathMarks: 85,
          physicsMarks: 78,
          chemistryMarks: 92
        },
        {
          id: 2,
          name: "Emma",
          mathMarks: 92,
          physicsMarks: 87,
          chemistryMarks: 95
        },
        {
          id: 3,
          name: "Michael",
          mathMarks: 78,
          physicsMarks: 75,
          chemistryMarks: 80
        },
        {
          id: 4,
          name: "Olivia",
          mathMarks: 88,
          physicsMarks: 85,
          chemistryMarks: 91
        },
        {
          id: 5,
          name: "William",
          mathMarks: 94,
          physicsMarks: 89,
          chemistryMarks: 96
        },
        {
          id: 6,
          name: "Sophia",
          mathMarks: 77,
          physicsMarks: 72,
          chemistryMarks: 78
        },
        {
          id: 7,
          name: "James",
          mathMarks: 90,
          physicsMarks: 86,
          chemistryMarks: 92
        },
        {
          id: 8,
          name: "Ava",
          mathMarks: 86,
          physicsMarks: 81,
          chemistryMarks: 88
        },
        {
          id: 9,
          name: "Ethan",
          mathMarks: 82,
          physicsMarks: 79,
          chemistryMarks: 84
        },
        {
          id: 10,
          name: "Mia",
          mathMarks: 89,
          physicsMarks: 84,
          chemistryMarks: 91
        }
      ];
    return (
        <div >
            <LChart width={800} height={400} data={mathMarksData}>
            <XAxis dataKey="name" />
            <YAxis />
                <Line dataKey="mathMarks" stroke='green'/><Line/>
                <Line dataKey={'chemistryMarks'} stroke='orange'/>
            </LChart>
        </div>
    );
};

export default LineChart;