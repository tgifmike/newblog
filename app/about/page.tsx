import React from "react";
export const metadata = {
  title: "About new Blog",
};

const aboutPage = () => {
  return (
    <div className="p-2 m-2">
      <h1 className="text-5xl font-extrabold text-grey-800">About Page</h1>
      <p className="mt-3 text-lg text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        aliquam, illum expedita perferendis reprehenderit nostrum! Maxime non
        voluptatum unde maiores, ipsam alias amet sit porro odio accusantium
        neque magni labore hic saepe ducimus tempora similique ea ullam, error
        quasi? Aperiam deleniti blanditiis, maiores delectus consectetur commodi
        nemo aspernatur distinctio ducimus.
      </p>
    </div>
  );
};

export default aboutPage;
