import React from "react";

const List = ({image, name, age}) => {
  return (
    <>
      <div className="single-birthday">
        <img src={image} alt={name} />
        <article className="birthday-info">
          <h5>{name}</h5>
          <p>{age}</p>
        </article>
      </div>
    </>
  );
};

export default List;
