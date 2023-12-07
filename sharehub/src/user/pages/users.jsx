import UsersList from "../components/users-list"

export default function Users() {
   const USERS = [
      {
         id: "u1",
         name: "Max Schwarz",
         image: "https://i.pinimg.com/564x/4e/2f/73/4e2f736d891f0e6ed9f5d4fd0e374f90.jpg",
         places: 3,
      },
   ]

   return <UsersList items={USERS} />
}
