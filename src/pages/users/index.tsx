import { GetServerSideProps } from "next";
import { FunctionComponent } from "react";
import Link from "next/link";
import { IUser } from "../../../types";

const Users: FunctionComponent<{
    usersData: IUser[]
    user:  IUser
}> = ({usersData}) => {
    console.log(usersData);
    
  return <div>
        {
          usersData.map(user => {
            return (
                <>
                    <Link href={`users/${user.id}`} passHref>
                    <p className="text-blue-600 my-[0.5em]">{user.name}</p>
                    </Link>
                </>
            )
          })
        }
  </div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await res.json();

  return {
    props: {
        usersData,
    },
  };
};

export default Users;
