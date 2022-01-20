import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [users, setUsers] = useState(data);

  const clearUsers = () => {
    setUsers([]);
  }
  return (
    <section id="birthdayBody">
      <div id="birthdayContainer">
        <p>{users.length} birthdays today</p>
        <div id="birthdays">
          {users.map((user) => {
            return <List key={user.id} {...user} />;
          })}
          <button type="button" onClick={clearUsers}>Clear All</button>
        </div>
      </div>
    </section>
  );
};
export default App;
