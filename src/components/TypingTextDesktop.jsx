import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

const TypingTextDesktop = () => {
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
    <div ref={ref} className="font-mono whitespace-pre-line leading-relaxed">
      {stage === "typingFunction" && (
        <div className="text-2xl text-green-400">
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
        <div className="text-sm text-green-400 mt-4">
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
                .typeString("→ To ship production-grade backend systems in Go and Python on Google Cloud.\n")
                .typeString("→ To master distributed systems and large-scale system design end to end.\n")
                .typeString("→ To strengthen DSA and algorithmic problem-solving through deliberate practice.\n")
                .typeString("→ To contribute to high-leverage open-source and developer tooling.\n")
                .typeString("→ To work in fast-paced, product-driven engineering teams.\n")
                .typeString("→ To explore performance, reliability, and security engineering deeply.\n")
                .typeString("→ To grow into an engineer who designs and owns impactful software at scale.")
                .start();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TypingTextDesktop;
