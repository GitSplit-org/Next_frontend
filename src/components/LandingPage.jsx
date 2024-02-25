import React from "react";

const LandingPage = () => {
  return (
    <>
    
    <div className="flex flex-col items-center justify-center h-screen pb-20">
      <h1 className="text-4xl font-bold mb-4">Support Open Source Development</h1>
      <p className="text-2xl">Donate to GitHub Projects</p>
      <div className="pt-2">
      <button className=" border-2 bg-stone-600 text-white p-1">Get Started</button>
      <button className="pl-4">learn more..</button>
      </div>
      
    </div>
    <div className=" bg-slate-400 h-screen w-screen">
      <div className="flex h-5/6 pl-20 pr-20 pt-10 ">
        <div className="w-1/2  p-4 ease-in-out bg-gradient-to-t from-white to-white hover:to-lime-100">
          {/* Content for the left pane */}
          <h2 className="text-xl font-bold">Gitsplit Grants</h2>
          <p className="text-2xl pt-5">Get funding & grow your ecosystem </p>
          <p className="pb-3">
            Participate in our quartely grants programfor open-source &
            impact-oriented projects.
          </p>
          <button className="border-2  rounded-md border-black p-1 ">
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
          <button className="border-2  rounded-md border-black p-1 ">
            view Grants{" "}
          </button>
        </div>
      </div>
      </div>
      <div className="w-screen h-screen pt-10 ">

        <p className="text-4xl font-extrabold text-cyan-900 flex justify-center ">Raise money with full transparency</p>
        <p className=" text-lg font-bold  pt-2 flex justify-center"> We do the paperwork so you can focus on your mission.</p>
        <div className="flex justify-center">
        <img src="https://www.surveylegend.com/wordpress/wp-content/uploads/2021/02/organizational-culture-2.png" alt="React Image" width={600} />
        </div>
      </div>


    </>
  );
};

export default LandingPage;
