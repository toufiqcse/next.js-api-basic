import { FunctionComponent, useState } from "react";
import { IUseStateUser, IUser, IUserStateUser } from "../../../types";
import Link from "next/link";
import Head from "next/head";


const index:FunctionComponent <{
    users: IUser[]
}> = () => {
  const [users, setUsers] = useState([])

   const [user, setUser] = useState('')

   const handleAddUser = () => {
    fetch('api/mens', {
      method: "POST",
      body: JSON.stringify({user}),
      headers: {"content-Type": "application/json"}
    })
    loadData();
   }


  const loadData = () => {
    fetch("api/mens")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  const deleteUser = (id) =>{
    fetch(`/api/mens/${id}`, {
      method: "DELETE",

    })
  loadData()

  }


  return (
    <>
    <Head>
      <title>person Homepage</title>
    </Head>
    <div>
      <div>
        <input className="border-2 border-gray-500" type="text" name="name" id="name" onChange={e => setUser(e.target.value)} placeholder="enter user name"/>
        <button onClick={handleAddUser}>add user</button>
        
      </div>
      <button onClick={loadData}>Load Data</button>

      <div>
        <h1>Total User {users.length}</h1>
       {
        users.map(user => {
          return (
            <div key={user.id}>
                <Link href={`person/${user?.id}`} passHref>
                <p className="text-blue-600 my-[0.5em]">{user.name}</p>
                </Link>
                <button onClick={() => deleteUser(user?.id)}>Delete user</button>
            </div>
        )
        })
       }
      </div>
    </div>
    </>
  );
};

export default index;

