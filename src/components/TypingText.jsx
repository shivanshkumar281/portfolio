import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

const TypingText = () => {
  const [stage, setStage] = useState("idle");
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setStage("typingFunction");
      setKey((k) => k + 1);

      const timeout1 = setTimeout(() => {
        setStage("typingGoals");
        setKey((k) => k + 1);
      }, 2000);

      return () => clearTimeout(timeout1);
    } else {
      setStage("idle");
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="font-mono whitespace-pre-line leading-relaxed flex flex-col items-start justify-start"
    >
      {stage === "typingFunction" && (
        <div className="text-sm text-green-400">
          <Typewriter
            key={`function-${key}`}
            options={{
              delay: 40,
              autoStart: true,
              cursor: "_",
              loop: false,
              deleteSpeed: 0,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("call ambitions_and_goals();").start();
            }}
          />
        </div>
      )}

      {stage === "typingGoals" && (
        <div className="text-xs text-green-400 mt-0">
          <Typewriter
            key={`goals-${key}`}
            options={{
              delay: 25,
              autoStart: true,
              cursor: "_",
              loop: false,
              deleteSpeed: 0,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("→ To work on real-world impactful projects.\n")
                .typeString("→ To master full-stack development and system-level understanding.\n")
                .typeString("→ To contribute to scalable and elegant architectures.\n")
                .typeString("→ To continuously learn, grow, and build meaningful solutions.")
                .start();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TypingText;
