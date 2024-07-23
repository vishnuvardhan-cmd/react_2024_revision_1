import React, { useEffect } from "react";

function ComponentLifeCyclec() {

  useEffect(() => {
    console.log("rendering");

    return () => console.log("unmounting");
  });
  return <div>i am learning</div>;
}

export default ComponentLifeCyclec;
