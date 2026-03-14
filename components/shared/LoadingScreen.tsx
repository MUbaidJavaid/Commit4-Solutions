import { motion } from "framer-motion";

const blocks = [
  { x: 0, y: 0, w: 44, h: 28, delay: 0 },
  { x: 48, y: 0, w: 28, h: 28, delay: 0.1 },
  { x: 80, y: 0, w: 36, h: 16, delay: 0.2 },
  { x: 0, y: 32, w: 28, h: 28, delay: 0.15 },
  { x: 32, y: 32, w: 52, h: 16, delay: 0.25 },
  { x: 88, y: 20, w: 28, h: 28, delay: 0.3 },
  { x: 16, y: 64, w: 36, h: 20, delay: 0.35 },
  { x: 56, y: 52, w: 44, h: 20, delay: 0.4 },
];

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative mb-8">
        <svg viewBox="0 0 120 88" fill="none" className="w-28 h-auto">
          {blocks.map((b, i) => (
            <motion.rect
              key={i}
              x={b.x} y={b.y} width={b.w} height={b.h} rx={6}
              fill="hsl(var(--accent))"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.8, 0.4, 0.8], scale: [0.5, 1, 0.95, 1] }}
              transition={{ duration: 2, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </div>
      <motion.p
        className="text-sm font-body font-semibold text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
