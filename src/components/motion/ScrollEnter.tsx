import { motion, useReducedMotion, type Variants } from "framer-motion";
import styled from "styled-components";
import type { ReactNode } from "react";

type Direction = "left" | "right";

function variantsFor(from: Direction): Variants {
  return {
    hidden: { opacity: 0, x: from === "left" ? -80 : 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
}

// A bare motion.div defaults to shrink-to-content sizing, which silently
// breaks any flex-row layout it's dropped into (the wrapper — not the
// styled child inside it — becomes the actual flex item). Sizing it as a
// normal flexible box here means every call site behaves as if this
// wrapper weren't there at all.
const Wrapper = styled(motion.div)`
  width: 100%;
  min-width: 0;
  flex: 1 1 0%;
`;

/**
 * Slides content in from a screen edge toward the center as it scrolls
 * into view. Replaces the old fade/translateY `Reveal` component.
 */
export function ScrollEnter({
  children,
  from,
}: {
  children: ReactNode;
  from: Direction;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <Wrapper
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={reduceMotion ? undefined : { once: true, margin: "-80px" }}
      variants={reduceMotion ? undefined : variantsFor(from)}
    >
      {children}
    </Wrapper>
  );
}
