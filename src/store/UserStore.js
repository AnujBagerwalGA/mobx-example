import React, { Component } from 'react';
import {
  action,
  computed,
  makeAutoObservable,
  observable,
  autorun,
  runInAction,
  makeObservable,
} from 'mobx';

export class UserStore extends Component {
  userInfo = {
    id: '',
    name: 'Anuj',
    subject: ['Math', 'English', 'Hindi'],
  };
  constructor(props) {
    super(props);
    makeObservable(this, {
      userInfo: observable, // observable : defines a trackable field that stores the state.
      totalSubject: computed, // computed : marks a getter that will derive new facts from the state and catch its output.
      updateUser: action, // action : marks a method as action that will modify the state.
      addSubject: action,
    });
    autorun(this.logUserDetails); // autorun : it accepts one function that should run everytime anything it observes changes.
    runInAction(this.prefetchData); // runInAction : Use this untility to create a temporarily action that is immediatly invoked.
  }

  get totalSubject() {
    console.log('Getter');
    return this.userInfo.subject.length;
  }

  logUserDetails = () => {
    console.log(
      `subject Length ${this.totalSubject} , Name ${this.userInfo.subject}`
    );
  };

  prefetchData = () => {
    console.log('Run In Action');
  };

  updateUser = (Name) => {
    return (this.userInfo.name = Name);
  };

  addSubject = (Name) => {
    let newSub = [...this.userInfo.subject];
    newSub.push(Name);
    return (this.userInfo.subject = newSub);
  };

  render() {
    return <div></div>;
  }
}

export default UserStore;
