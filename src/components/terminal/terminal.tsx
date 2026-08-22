import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Command,
  Cursor,
  Dots,
  Line,
  Output,
  Prompt,
  Row,
  TerminalBody,
  TerminalCard,
  TitleBar,
  TitleText,
} from "./styles";

type TerminalLine = {
  command: string;
  output?: string;
};

// Deliberately not translated: this reads as literal shell output, and
// translating "$ whoami" would break the illusion of a real terminal.
const lines: TerminalLine[] = [
  { command: "whoami", output: "maria_eduarda — Full Stack Developer" },
  {
    command: "ls skills/",
    output: "React  Next.js  TypeScript  Node.js  Python  PostgreSQL",
  },
  {
    command: "cat mission.txt",
    output: "Turning complex data into products people actually understand.",
  },
];

const rowVariants: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.55, delayChildren: 0.2 } },
};

export function Terminal() {
  const reduceMotion = useReducedMotion();

  // The DOM always carries the full, real text of every line — the
  // clip-path reveal below is a purely visual layer on top of it. A screen
  // reader (or a reduced-motion user, who skips the animation entirely)
  // gets the complete content immediately, never a letter-by-letter
  // fragment that would normally have to be reassembled.
  return (
    <TerminalCard role="group" aria-label="Terminal — bash">
      <TitleBar>
        <Dots aria-hidden="true">
          <span />
          <span />
          <span />
        </Dots>
        <TitleText>terminal — bash</TitleText>
      </TitleBar>

      <motion.div
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={reduceMotion ? undefined : containerVariants}
      >
        <TerminalBody aria-label="Terminal transcript">
          {lines.map((line) => (
            <div key={line.command}>
              <Row>
                <motion.div variants={reduceMotion ? undefined : rowVariants}>
                  <Line>
                    <Prompt>$ </Prompt>
                    <Command>{line.command}</Command>
                  </Line>
                </motion.div>
              </Row>
              {line.output && (
                <Row>
                  <motion.div variants={reduceMotion ? undefined : rowVariants}>
                    <Output>{line.output}</Output>
                  </motion.div>
                </Row>
              )}
            </div>
          ))}
          <Row>
            <motion.div variants={reduceMotion ? undefined : rowVariants}>
              <Line>
                <Prompt>$ </Prompt>
                <Cursor $blink={!reduceMotion} aria-hidden="true" />
              </Line>
            </motion.div>
          </Row>
        </TerminalBody>
      </motion.div>
    </TerminalCard>
  );
}
