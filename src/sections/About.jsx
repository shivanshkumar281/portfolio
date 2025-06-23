import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import Typewriter from 'typewriter-effect';
import TypingText from "../components/TypingText";
import TypingTextDesktop from "../components/TypingTextDesktop";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Shivansh Kumar</p>
            <p className="subtext">
              I completed my M.Tech in Computer Science from IIT Patna, with a focus on full-stack development and system design.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
{/* Grid 2 - Desktop Layout */}
<div className="grid-default-color grid-2 hidden md:flex items-start justify-center px-4 py-6">
  <div className="text-left max-w-xl w-full">
    <p className="headText mb-4">Goals & Ambitions</p>
    <TypingTextDesktop />
  </div>
</div>

{/* Grid 2 - Mobile Layout */}
<div className="grid-default-color grid-2 flex md:hidden flex-col items-start justify-start px-4 py-6">
  <div className="w-full">
    <p className="headText mb-4">Goals & Ambitions</p>
    <TypingText />
  </div>
</div>


        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Operating from India (IST) and available for remote collaboration across international teams.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <p className="text-center text-sm text-neutral-200 select-text">
              shivansh_2411cs20@iitp.ac.in
            </p>
            <CopyEmailButton />
          </div>
        </div>
{/* Grid 5 - Desktop Layout */}
<div className="grid-default-color grid-5 hidden md:flex items-start justify-between gap-6">
   <div className="z-10 w-[50%]">
            <p className="headText mb-0 ">Tech Stack</p>
            <p className="subtext">
            I develop full-stack applications using the MERN stack and write efficient code in C++, C, and JavaScript. I have a strong grip on data structures and algorithms, backed by a solid foundation in core CS subjects like Operating Systems, DBMS, Computer Networks, and Computer Organization. I'm also well-versed in system design, from low-level internals to high-level scalable architectures.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

{/* Grid 5 - Mobile Layout */}
<div className="grid-default-color grid-5 flex flex-row gap-4 items-start md:hidden px-4">
  {/* Text Section - 70% */}
  <div className="w-[70%]">
    <p className="headText mb-0">Tech Stack</p>
    <p className="subtext">
      I build full-stack applications using the MERN stack, write efficient code in C++ and have a strong grasp of DSA, system design, and core CS: (OS, DBMS, Computer Networks and Computer Organisation).
    </p>
  </div>

  {/* Animation Section - 30% */}
  <div className="w-[30%] flex justify-center translate-x-32 translate-y-[-7%]" >
    <div className="w-full scale-100">
      <Frameworks />
    </div>
  </div>
</div>
</div>
    </section>
  );
};

export default About;