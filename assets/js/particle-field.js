(() => {
  const canvas = document.getElementById("particleField");
  if (!canvas) return;
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let points = [];
  let frame = 0;
  let visible = !document.hidden;

  const pointCount = () => Math.max(34, Math.min(112, Math.round((width * height) / 15500)));
  const random = (min, max) => min + Math.random() * (max - min);

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    points = Array.from({ length: pointCount() }, () => ({
      x: random(0, width),
      y: random(0, height),
      vx: random(-0.11, 0.11),
      vy: random(-0.10, 0.10),
      radius: random(0.45, 1.35),
      phase: random(0, Math.PI * 2),
      gold: Math.random() > 0.91
    }));
    draw(0, false);
  }

  function draw(time, animate = true) {
    ctx.clearRect(0, 0, width, height);
    const motion = time * 0.00022;

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (animate) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -8) p.x = width + 8;
        if (p.x > width + 8) p.x = -8;
        if (p.y < -8) p.y = height + 8;
        if (p.y > height + 8) p.y = -8;
      }
      const pulse = 0.68 + Math.sin(motion + p.phase) * 0.22;
      const color = p.gold ? "212,166,94" : "191,0,2";
      const alpha = (p.gold ? 0.25 : 0.30) * pulse;

      ctx.beginPath();
      ctx.fillStyle = "rgba(" + color + "," + alpha + ")";
      ctx.shadowColor = p.gold ? "rgba(212,166,94,.16)" : "rgba(191,0,2,.22)";
      ctx.shadowBlur = p.radius * 7;
      ctx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      for (let j = i + 1; j < points.length; j++) {
        const q = points[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const max = 112;
        if (dist < max) {
          const fade = (1 - dist / max) * 0.075;
          ctx.beginPath();
          ctx.strokeStyle = "rgba(191,0,2," + fade + ")";
          ctx.lineWidth = 0.55;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
  }

  function loop(time) {
    if (!visible || reduceMotion) return;
    draw(time, true);
    frame = requestAnimationFrame(loop);
  }

  document.addEventListener("visibilitychange", () => {
    visible = !document.hidden;
    if (visible && !reduceMotion && !frame) frame = requestAnimationFrame(loop);
    if (!visible && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  });

  window.addEventListener("resize", resize, { passive: true });
  resize();
  if (!reduceMotion && visible) frame = requestAnimationFrame(loop);
})();
