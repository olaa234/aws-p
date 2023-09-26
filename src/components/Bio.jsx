// import Link from "react-router-dom";
import "../App.css";
import Github from "./Github";
import Linkedin from "./Linkedin";
import Discord from "./Discord";

function Bio() {
  return (
    <div className="h-screen w-full justify-center lg:py-9">
      <div className="flex justify-center mt-1 ">
        <h1 className="font-Nunito  text-[25px] mt-1 font-thin tracking-tighter cursor-pointer ">
          <span className="hover:animate-pulse 1s">Olabinjó Múýiwá </span>|{" "}
          <a href="https://pt-3-0.vercel.app/" target="_blank" rel="noreferrer">
            Frontend Space
          </a>
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
            <a
              href="https://www.linkedin.com/in/muyiwa-olabinjo-01a657228/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/olaa234"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
          <div>
            <Discord />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-60 text-base">©️ 2023</div>
    </div>
  );
}

export default Bio;
