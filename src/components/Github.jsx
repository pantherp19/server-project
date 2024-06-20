import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
  //     response.json().then((response) => setData(response))
  //   );
  //   console.log(data);
  // }, []);

  return (
    <div className="text-center flex justify-center gap-4">
      {/* <img
        // src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="w-24 h-auto rounded-full"
      /> */}
      <h2 className="align-middle">GitHub followers: {data.title}</h2>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
};
