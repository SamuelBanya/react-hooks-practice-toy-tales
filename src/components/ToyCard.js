import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  const { id, name, image, likes } = toy;

  function handleDeleteClick() {
    fetch(`https://toy-tales-jsonserver.herokuapp.com/toys/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDeleteToy(toy));
  }

  function handleLikeClick() {
    const updateObj = {
      likes: toy["likes"] + 1,
    };

    fetch(`https://toy-tales-jsonserver.herokuapp.com/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((response) => response.json())
      .then(onUpdateToy);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
