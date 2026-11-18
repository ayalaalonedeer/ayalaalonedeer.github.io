'use client';
import { useEffect, useRef } from 'react';

// ワンポイント用のASCII飾り。本人写真・ジャケットは使わない（植物の試作素材のみ）。
export default function AsciiMark({ src, label }: { src: string; label: string }) {
 const canvas = useRef<HTMLCanvasElement>(null);
 const host = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const node = canvas.current, box = host.current;
  if (!node || !box) return;
  let disposed = false;
  const photo = new window.Image();
  const draw = () => {
   if (disposed || !photo.complete || !photo.naturalWidth) return;
   const width = box.clientWidth; if (!width) return;
   const height = width, dpr = Math.min(window.devicePixelRatio || 1, 2);
   node.width = Math.round(width * dpr); node.height = Math.round(height * dpr);
   const ctx = node.getContext('2d'); if (!ctx) return;
   ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, width, height);
   const columns = 64, rows = 64;
   const sample = document.createElement('canvas'); sample.width = columns; sample.height = rows;
   const sc = sample.getContext('2d', { willReadFrequently: true }); if (!sc) return;
   sc.fillStyle = 'white'; sc.fillRect(0, 0, columns, rows);
   const fit = Math.min(columns / photo.naturalWidth, rows / photo.naturalHeight);
   const dw = photo.naturalWidth * fit, dh = photo.naturalHeight * fit;
   sc.drawImage(photo, (columns - dw) / 2, (rows - dh) / 2, dw, dh);
   const px = sc.getImageData(0, 0, columns, rows).data;
   const ramp = ' .,:/|vYx%#@', cw = width / columns, ch = height / rows;
   ctx.font = `${ch * 1.05}px "Courier New", monospace`;
   ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#1f2a1c';
   for (let y = 0; y < rows; y++) for (let x = 0; x < columns; x++) {
    const o = (y * columns + x) * 4;
    const luma = .2126 * px[o] + .7152 * px[o + 1] + .0722 * px[o + 2];
    const d = Math.max(0, Math.min(1, (225 - luma) / 210));
    const g = ramp[Math.floor(d * (ramp.length - 1))];
    if (g !== ' ') ctx.fillText(g, (x + .5) * cw, (y + .5) * ch, cw);
   }
  };
  photo.onload = draw; photo.src = src;
  const ro = new ResizeObserver(draw); ro.observe(box);
  return () => { disposed = true; ro.disconnect(); photo.onload = null; };
 }, [src]);
 return <div className="ascii-mark" ref={host}><canvas ref={canvas} aria-label={label} /></div>;
}
