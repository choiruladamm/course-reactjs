import React, { useState } from "react";

export const Text = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
};
