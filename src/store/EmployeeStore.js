import React from 'react';
import {
  types,
  onSnapshot,
  flow,
  applySnapshot,
  getSnapshot,
} from 'mobx-state-tree';
import axios from 'axios';

const EmployeeModal = types
  .model('Employee', {
    employeeId: types.string,
    employeeName: types.string,
    math: types.number,
    english: types.number,
  })
  .actions((self) => ({
    setMath(value) {
      self.math = parseInt(value);
    },
    getEnglishMarks: flow(function* getEnglishMarks() {
      // It is like Generater Function. // https://www.youtube.com/watch?v=EzdgkEMvrvA
      // Generater Function is use to suspend value
      // it excute one yield at a time
      // flow Use to call API's.
      let response = yield axios.get('https://reqres.in/api/users?page=2');
      applySnapshot(self, { ...self, english: response.data.total }); // Another way to set value.
    }),
    afterCreate() {
      // it is a hook Like Life cycle.
      onSnapshot(self, (snapshot) => {
        // it is like componentDidUpdate when data change then only it call.
        console.log('SnapShot');
      });
    },
  }))
  .views((self) => ({
    get totalMarks() {
      return self.math + self.english;
    },
    get percentage() {
      return ((self.math + self.english) / 200) * 100;
    },
  }));

const employees = EmployeeModal.create({
  employeeId: 'Cs212',
  employeeName: 'Anuj',
  math: 76,
  english: 87,
});

console.log('TODO', getSnapshot(employees)); // use to get data
export default employees;
