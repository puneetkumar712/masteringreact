import React from "react";

const Like = props => {
  let classes = getLikedClasses(props);
  return (
    <i onClick={props.onLike} className={classes} aria-hidden="true"></i>
  );
};

function getLikedClasses(props) {
  let classes = "fa fa-heart";
  if (!props.like) classes += "-o";
  return classes;
}

export default Like;
