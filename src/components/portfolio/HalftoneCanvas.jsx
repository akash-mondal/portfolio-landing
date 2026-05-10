import { useEffect, useRef } from "react";

// Halftone dot grid with per-dot spring physics.
// Cursor pushes dots away with a falloff force; springs pull them home.
export const HalftoneCanvas = ({
  spacing = 7,
  radius = 1.25,
  repelRadius = 90,
  repelStrength = 1.6,
  spring = 0.06,
  damping = 0.78,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let dots = [];
    let width = 0;
    let height = 0;
    const mouse = { x: -9999, y: -9999, active: false };
    let raf;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const next = [];
      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          next.push({ x, y, vx: 0, vy: 0, hx: x, hy: y });
        }
      }
      dots = next;
    };

    const onMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onMouseLeave = () => {
      mouse.active = false;
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      const r2 = repelRadius * repelRadius;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        if (mouse.active) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < r2 && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / repelRadius) * repelStrength;
            d.vx += (dx / dist) * force;
            d.vy += (dy / dist) * force;
          }
        }
        d.vx += (d.hx - d.x) * spring;
        d.vy += (d.hy - d.y) * spring;
        d.vx *= damping;
        d.vy *= damping;
        d.x += d.vx;
        d.y += d.vy;
      }

      ctx.fillStyle = "#000";
      ctx.beginPath();
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        ctx.moveTo(d.x + radius, d.y);
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
      }
      ctx.fill();

      raf = requestAnimationFrame(tick);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [spacing, radius, repelRadius, repelStrength, spring, damping]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full mix-blend-multiply pointer-events-none"
    />
  );
};
