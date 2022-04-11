import React from "react";
import {fetchData} from './helpers'
import AjaxFieldContainer from './AjaxFieldContainer'
import UserField from './userField'
import {PageNumber} from './App'

const UsersList = () => {
  let [usersList,setUsersList] = React.useState([]);
  let pageNum = React.useContext(PageNumber);
  React.useEffect( ()=> {
    fetchData("user?page="+pageNum.stateOfPageNumber.pageNum+"&limit=10")
    .then(res => setUsersList(res.data.data))
    .catch(err => console.log(err));
  },[pageNum]);
  return( 
  <section id="usersList">
    <h1 className="users-header">Users List</h1>
    <div className="users-container">
      <UserField data={usersList.map(el => el.id)} name="id" />
      <UserField data={usersList.map(el => el.title)} name="title" />
      <UserField data={usersList.map(el => el.firstName)} name="firstName" />
      <UserField data={usersList.map(el => el.lastName)} name="lastName" />
      <AjaxFieldContainer data={usersList.map(el => el.id)} name="email" />
    </div>
  </section>);
}

export default UsersList