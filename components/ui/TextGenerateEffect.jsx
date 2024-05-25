"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <React.Fragment key={word + idx}>
              <motion.span
                className={`${idx > 5 ? 'bg-clip-text bg-gradient-to-br from-white via-[#bebebe] to-[#929292] text-transparent ': "text-white"} opacity-0`}
              >
                {word}{" "}
              </motion.span>
              {(word === "builds" || word === "and ") && <br />}
            </React.Fragment>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div className={` dark:text-white text-black  leading-tight tracking-wid`} >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
