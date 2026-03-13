import { motion } from "framer-motion";

interface BlockProps {
  x: number;
  y: number;
  w: number;
  h: number;
  delay: number;
  color?: string;
  rx?: number;
}

function Block({ x, y, w, h, delay, color = "hsl(var(--accent))", rx = 12 }: BlockProps) {
  return (
    <motion.rect
      x={x} y={y} width={w} height={h} rx={rx}
      fill={color}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  );
}

function Connector({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="hsl(var(--accent) / 0.3)"
      strokeWidth={2}
      strokeDasharray="4 4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    />
  );
}

export function HeroModularShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <svg viewBox="0 0 500 400" fill="none" className="w-full h-full">
        {/* Connected blocks forming a system */}
        <Block x={40} y={30} w={100} h={60} delay={0.2} color="hsl(var(--accent) / 0.12)" />
        <Block x={160} y={20} w={80} h={40} delay={0.4} color="hsl(var(--accent) / 0.08)" />
        <Block x={260} y={50} w={120} h={70} delay={0.3} color="hsl(var(--accent) / 0.15)" />
        <Block x={80} y={110} w={140} h={50} delay={0.5} color="hsl(var(--blue-brand) / 0.1)" />
        <Block x={240} y={140} w={90} h={90} delay={0.6} color="hsl(var(--accent) / 0.1)" rx={20} />
        <Block x={350} y={100} w={110} h={55} delay={0.7} color="hsl(var(--lavender) / 0.12)" />
        <Block x={60} y={180} w={70} h={70} delay={0.8} color="hsl(var(--accent) / 0.07)" rx={16} />
        <Block x={150} y={200} w={160} h={45} delay={0.9} color="hsl(var(--blue-brand) / 0.08)" />
        <Block x={330} y={180} w={130} h={60} delay={1.0} color="hsl(var(--accent) / 0.1)" />
        <Block x={100} y={270} w={110} h={50} delay={1.1} color="hsl(var(--lavender) / 0.08)" />
        <Block x={230} y={260} w={90} h={80} delay={1.2} color="hsl(var(--accent) / 0.12)" rx={18} />
        <Block x={340} y={260} w={120} h={45} delay={1.3} color="hsl(var(--blue-brand) / 0.06)" />

        {/* Connectors */}
        <Connector x1={140} y1={60} x2={160} y2={40} delay={0.6} />
        <Connector x1={240} y1={40} x2={260} y2={60} delay={0.7} />
        <Connector x1={220} y1={135} x2={240} y2={160} delay={0.9} />
        <Connector x1={330} y1={180} x2={350} y2={128} delay={1.1} />
        <Connector x1={210} y1={245} x2={230} y2={270} delay={1.4} />
        <Connector x1={320} y1={290} x2={340} y2={280} delay={1.5} />
      </svg>
    </div>
  );
}

export function FloatingModularAccent({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
        <Block x={10} y={10} w={60} h={35} delay={0} color="hsl(var(--accent) / 0.1)" />
        <Block x={80} y={5} w={50} h={50} delay={0.15} color="hsl(var(--accent) / 0.15)" rx={14} />
        <Block x={140} y={20} w={50} h={30} delay={0.3} color="hsl(var(--blue-brand) / 0.08)" />
        <Block x={30} y={55} w={90} h={30} delay={0.4} color="hsl(var(--blue-brand) / 0.1)" />
        <Block x={130} y={60} w={60} h={60} delay={0.5} color="hsl(var(--accent) / 0.08)" rx={16} />
        <Block x={10} y={95} w={50} h={50} delay={0.6} color="hsl(var(--lavender) / 0.1)" rx={12} />
        <Block x={70} y={100} w={80} h={35} delay={0.7} color="hsl(var(--accent) / 0.12)" />
        <Connector x1={70} y1={28} x2={80} y2={25} delay={0.3} />
        <Connector x1={130} y1={30} x2={140} y2={30} delay={0.5} />
        <Connector x1={120} y1={70} x2={130} y2={75} delay={0.7} />
      </svg>
    </motion.div>
  );
}

export function SectionDividerShapes() {
  return (
    <div className="w-full h-16 relative overflow-hidden pointer-events-none">
      <svg viewBox="0 0 1200 60" fill="none" className="w-full h-full" preserveAspectRatio="none">
        <motion.rect x={100} y={10} width={80} height={20} rx={6} fill="hsl(var(--accent) / 0.06)"
          initial={{ x: -80 }} animate={{ x: 100 }} transition={{ duration: 1.2, ease: "easeOut" }} />
        <motion.rect x={200} y={25} width={120} height={15} rx={5} fill="hsl(var(--blue-brand) / 0.05)"
          initial={{ x: -120 }} animate={{ x: 200 }} transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }} />
        <motion.rect x={800} y={15} width={100} height={25} rx={8} fill="hsl(var(--accent) / 0.07)"
          initial={{ x: 1300 }} animate={{ x: 800 }} transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }} />
        <motion.rect x={950} y={8} width={60} height={40} rx={10} fill="hsl(var(--lavender) / 0.06)"
          initial={{ x: 1300 }} animate={{ x: 950 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} />
      </svg>
    </div>
  );
}
