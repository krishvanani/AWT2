import React from "react";
import UserProfile from "./UserProfile";

function App() {
  const userData = {
    name: 'Krish',
    age: 20,
    location: 'Surat',
    bio: 'Jay Swaminarayan'
  }
  return (
    <>
      <div>
        <UserProfile name={userData.name} age={userData.age} location={userData.location} bio={userData.bio} />
      </div>
    </>
  );
}

export default App;