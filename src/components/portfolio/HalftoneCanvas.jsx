import { useEffect, useRef } from "react";

// Halftone reproduction of an image as a grid of dots, each one's radius
// driven by the brightness of the underlying pixel. Dots have per-particle
// spring physics: the cursor pushes them aside with a radial falloff,
// springs pull them back home. Image and filter are the same thing.
export const HalftoneCanvas = ({
  src,
  spacing = 3.5,
  maxRadius = 1.85,
  minRadius = 0.1,
  gamma = 0.7,
  repelRadius = 80,
  repelStrength = 1.4,
  spring = 0.07,
  damping = 0.78,
  dotColor = "rgba(245,245,245,0.95)",
  invert = false,
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

    const img = new Image();
    img.crossOrigin = "anonymous";
    let imgReady = false;

    const sampleCanvas = document.createElement("canvas");
    const sampleCtx = sampleCanvas.getContext("2d", { willReadFrequently: true });

    const build = () => {
      if (!imgReady) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width <= 0 || height <= 0) return;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Object-cover mapping from natural image into the card.
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const cardAspect = width / height;
      let drawW, drawH, offX, offY;
      if (imgAspect > cardAspect) {
        drawH = height;
        drawW = drawH * imgAspect;
        offX = (width - drawW) / 2;
        offY = 0;
      } else {
        drawW = width;
        drawH = drawW / imgAspect;
        offX = 0;
        offY = (height - drawH) / 2;
      }

      sampleCanvas.width = Math.max(1, Math.floor(width));
      sampleCanvas.height = Math.max(1, Math.floor(height));
      sampleCtx.clearRect(0, 0, sampleCanvas.width, sampleCanvas.height);
      sampleCtx.drawImage(img, offX, offY, drawW, drawH);
      const data = sampleCtx.getImageData(
        0,
        0,
        sampleCanvas.width,
        sampleCanvas.height
      ).data;
      const sw = sampleCanvas.width;

      const next = [];
      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          const ix = Math.floor(x);
          const iy = Math.floor(y);
          const idx = (iy * sw + ix) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          let lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          if (invert) lum = 1 - lum;
          const shaped = Math.pow(Math.max(0, Math.min(1, lum)), gamma);
          const radius = minRadius + (maxRadius - minRadius) * shaped;
          next.push({ x, y, vx: 0, vy: 0, hx: x, hy: y, r: radius });
        }
      }
      dots = next;
    };

    img.onload = () => {
      imgReady = true;
      build();
    };
    img.src = src;

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

      ctx.fillStyle = dotColor;
      ctx.beginPath();
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        if (d.r < 0.15) continue;
        ctx.moveTo(d.x + d.r, d.y);
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      }
      ctx.fill();

      raf = requestAnimationFrame(tick);
    };

    const ro = new ResizeObserver(build);
    ro.observe(parent);
    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
      img.onload = null;
    };
  }, [
    src,
    spacing,
    maxRadius,
    minRadius,
    gamma,
    repelRadius,
    repelStrength,
    spring,
    damping,
    dotColor,
    invert,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};
