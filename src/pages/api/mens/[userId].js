import { users } from "../../../../usersData";

export default function handler(req, res) {
  const { userId } = req.query;
  console.log(userId);
  if (req.method == "GET") {
    const user = users.find((use) => use.id == parseInt(userId));
    res.status(200).json(user);
  } else if (req.method == "DELETE") {
    const deletedUser = users.find((user) => user.id == parseInt(userId));
    const indexNo = users.findIndex((user) => user.id == parseInt(userId));
    users.splice(indexNo, 1);
    res.status(200).json(deletedUser);
  }
}
