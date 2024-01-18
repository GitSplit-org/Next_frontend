import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className=" text-3xl font-extrabold flex justify-center pt-10 pb-5">
        <p>Solutions we’re building to support digital communities</p>
      </div>
      <div className="flex  h-1/2 pl-20 pr-20 pt-10">
        <div className="w-1/2  p-4 ease-in-out bg-gradient-to-t from-white to-white hover:to-lime-100">
          {/* Content for the left pane */}
          <h2 className="text-xl font-bold">Gitsplit Grants</h2>
          <p className="text-2xl pt-5">Get funding & grow your ecosystem </p>
          <p className="pb-3">
            Participate in our quartely grants programfor open-source &
            impact-oriented projects.
          </p>
          <button className="border-2  rounded-md border-black border-spacing-2 ">
            view Grants{" "}
          </button>
        </div>
        <div className="w-1/2  p-4 ease-in-out bg-gradient-to-t from-white to-white hover:to-blue-100">
          {/* Content for the right pane */}
          <h2 className="text-xl font-bold">Grant Program</h2>
          <p className="text-2xl pt-5">Launch & grow your grants program </p>
          <p className="pb-3">
            Easily manage your onchine program with our customizable grants
            solution .
          </p>
          <button className="border-2  rounded-md border-black border-spacing-2 ">
            view Grants{" "}
          </button>
        </div>
      </div>
      <div className="w-screen h-screen pt-10">

        <p className="text-4xl font-extrabold text-cyan-900 flex justify-center">Raise money with full transparency</p>
      </div>
    </>
  );
};

export default LandingPage;
