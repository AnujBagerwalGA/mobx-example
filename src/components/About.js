import React from 'react';
import store from '../store/EmployeeStore';
import { observer } from 'mobx-react-lite';

const About = () => {
  let {
    employeeName,
    employeeId,
    math,
    english,
    totalMarks,
    setMath,
    percentage,
    getEnglishMarks,
  } = store;
  return (
    <div>
      <h1>{`${employeeName} - ${employeeId}`}</h1>
      <h3>{`Math Marks - ${math}`}</h3>
      <h3>{`English Marks - ${english}`}</h3>
      <h3>{`Total Marks - ${totalMarks}`}</h3>
      <p>{`Percentage - ${percentage}%`}</p>

      <button onClick={() => setMath(67)}>Update Math Marks</button>
      <button onClick={() => getEnglishMarks()}>Call API</button>
    </div>
  );
};

export default observer(About);
