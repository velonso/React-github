import React from "react";

export function UserInfoCard ({ userData }) {
  return (
    <div className="send__wrapper">
      {userData.avatar_url ? (
        <div className="send__item">
          <img src={userData.avatar_url} alt="avatar" />
        </div>
      ) : (
        <div></div>
      )}

      {userData.login ? (
        <div className="send__item">
          Login : {userData.login}
        </div>
      ) : (
        <div></div>
      )}

      {userData.name ? (
        <div className="send__item">Name : {userData.name}</div>
      ) : (
        <div></div>
      )}
      
      {/* двойное отрицание,что бы не создавть пустой <div></div> */}
      {!! userData.age && (
        <div className="send__item">Age : {userData.age}</div>
      ) }

      {userData.company ? (
        <div className="send__item">Company : {userData.company}</div>
      ) : (
        <div></div>
      )}

      {userData.followers ? (
        <div className="send__item">Followers: {userData.followers}</div>
      ) : (
        <div></div>
      )}

      {userData.following ? (
        <div className="send__item">Following: {userData.following}</div>
      ) : (
        <div></div>
      )}

      {userData.location ? (
        <div className="send__item">Location: {userData.location}</div>
      ) : (
        <div></div>
      )}

      {userData.blog ? (
        <div className="send__item">Blog: {userData.blog}</div>
      ) : (
        <div></div>
      )}

      {userData.updated_at ? (
        <div className="send__item">Update at: {userData.updated_at}</div>
      ) : (
        <div></div>
      )}

      {userData.repos_url ? (
        <div className="send__item">Repos: {userData.repos}</div>
      ) : (
        <div></div>
      )}
    </div>
  )
};