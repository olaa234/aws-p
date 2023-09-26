// import Link from "react-router-dom";
import "../App.css";
import Github from "./Github";
import Linkedin from "./Linkedin";
import Discord from "./Discord";

function Bio() {
  return (
    <div className="h-screen w-full justify-center lg:py-9">
      <div className="flex justify-center ">
        <h1 className="font-Nunito  text-[25px] mt-1 font-thin tracking-tighter cursor-pointer ">
          <span className="">Olabinjó Múýiwá </span>| Frontend Space
        </h1>
      </div>
      <div className="flex-column justify-center mt-60  py-4 lg:mt-65 lg:py-16">
        <div className="flex justify-center">
          <div>
            <h1 className="text-7xl text-center font-medium ">
              Olabinjó Múýiwá
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-3 py-2">
          <h2 className="text-2xl font-medium">Solution Architect</h2>
        </div>
        <div className="flex justify-center gap-5 cursor-pointer">
          <div>
            {/* <Link to="linkedin.com/in/muyiwa-olabinjo-01a657228/"> */}
            <Linkedin />
            {/* </Link> */}
          </div>
          <div>
            <Github />
          </div>
          <div>
            <Discord />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
