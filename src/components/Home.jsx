import React from "react";

/* =============================================
Landing Page Function Component
This is the home page component to be rendered
as the landing page view
============================================== */

const Home = () => {
  return (
    <div className="h-screen pt-16">
      <div className="max-w-screen-md bg-gray-100 shadow-lg rounded-lg mx-auto text-center py-8 hover:bg-gray-50">
        <h1 className="text-4xl leading-9 font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-8">
          Welcome to Phantom Landing Page
        </h1>
        <h2 className="text-xl font-bold text-gray-800 pt-2 sm:text-lg">
          This web application is under construction
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md bg-white shadow ">
            <a
              href="https://github.com/atlp-rwanda/Phantom-Frontend-Elites/blob/develop/README.md"
              target="_blank"
              className="jumbotron"
              rel="noreferrer"
            >
              App Details...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;