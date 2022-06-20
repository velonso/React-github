import React, { useState } from "react";
import { UserInfoCard } from "../UserInfoCard";
import { Button } from "../button";
import { Input } from "../input";
import { Repo } from "../repo";

export function Main() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [reposData, setReposData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); //деструкторизация массива//
  const [isNotFound, setIsNotFound] = useState(false);

  const gitHubUrl = `https://api.github.com/users/${username}`;
  const gitHubRepo =`https://api.github.com/users/${username}/repos`;


  const getReposData = async () => {
    const response = await fetch(gitHubRepo);
    const jsonData = await response.json();
    if (jsonData && jsonData.message !== "Not Found") {
      setReposData(jsonData);
      console.log(jsonData);
    } else if (username !== "") {
      setIsNotFound(true);
    } else {
      setReposData({});
    }
  };

  const getUserData = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    if (jsonData && jsonData.message !== "Not Found") {
      setUserData(jsonData);
      setIsLoaded(true);
      setIsNotFound(false);
      console.log(jsonData);
    } else if (username !== "") {
      setIsNotFound(true);
      setIsLoaded(false);
    } else {
      setUserData({});
      setIsNotFound(false);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getUserData ();
    getReposData ();
  }

  return (
    <form className="send__form" onSubmit={onSubmit}>
      <div className="send__container">
        <Input username={username} setUsername={setUsername} />
        <Button className="send__subscribe">
          Отправить
        </Button>
      </div>
      
      {
        isLoaded &&
        <div className="send__wrap-border">
          <UserInfoCard className="send__wrapper" userData={userData}/>
          <div className="send__list">
            {reposData.map((repo)=> <Repo key={repo.id} href={repo.html_url}>{repo.name}</Repo>)}
          </div>
        </div>
      }

      { isNotFound &&
        <div className="send__error h1">User data is not found</div>
      }
    </form>
  )
};