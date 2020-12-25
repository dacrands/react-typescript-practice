import * as React from "react";
import "./styles.css";

interface UserId {
  id: number;
}

function printUserId(userObj: UserId) {
  return userObj.id;
}

let myUser = { name: "David", email: "some1@email.com", id: 14 };

const Namer = () => <p>{printUserId(myUser)}</p>;

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Namer />
    </div>
  );
}
