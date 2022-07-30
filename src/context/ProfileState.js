import React from "react";
import { useState } from "react";
import ProfileContext from "./ProfileContext";

const ProfileState = (props) => {
  const [loginData, setLoginData] = useState({});

  // const getIndex = () => {
  //   usersInfo.findIndex(loginData.email);
  // };

  // const userInfo = usersInfo[getIndex];

  // const [profileInfo, setProfileInfo] = useState({
  //   name: "Md Monjurul Islam",
  //   email: "mrjmonju@gmail.com",
  //   phone: "01934442239",
  //   password: "12345678",
  // });
  return (
    <ProfileContext.Provider value={{ loginData, setLoginData }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
