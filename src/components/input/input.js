import React from "react";

export function Input({ username, setUsername }) {
  const onChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <label className="send__input input">
      <input className="input__input"
        placeholder="Введите имя"
        type="text"
        required=""
        onChange={(event) => {
          onChange(event);
        }}
        onKeyUp={(event) => {
          onChange(event);
        }}
        onPaste={(event) => {
          onChange(event);
        }}
      />
    </label>
  )
};