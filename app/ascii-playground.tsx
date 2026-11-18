'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';

const images = [
 {src:'/ayala-cover.webp',name:'DEER / COVER ART',alt:'鹿と人の顔が重なるAyala Alone Deer,のジャケット'},
 {src:'/ayala-connect.jpg',name:'Ayala Alone Deer, / CONNECT',alt:'ケーブルを差し込むAyala Alone Deer,のアーティスト写真'},
 {src:'/ayala-portrait-front.webp',name:'Ayala Alone Deer, / PORTRAIT',alt:'白い衣装を着たAyala Alone Deer,の全身アーティスト写真'},
];
export default function AsciiPlayground(){
 const [index,setIndex]=useState(1);
 const [ascii,setAscii]=useState(true);
 const [rendered,setRendered]=useState('');
 const canvas=useRef<HTMLCanvasElement>(null);
 const stage=useRef<HTMLDivElement>(null);
 const current=images[index];
 const ready=rendered===current.src;
 useEffect(()=>{
  const node=canvas.current;
  const host=stage.current;
  if(!node||!host)return;
  let disposed=false;
  const photo=new window.Image();
  const draw=()=>{
   if(disposed||!photo.complete||!photo.naturalWidth)return;
   const width=host.clientWidth;
   if(!width)return;
   const height=width;
   const dpr=Math.min(window.devicePixelRatio||1,2);
   node.width=Math.round(width*dpr);node.height=Math.round(height*dpr);
   const ctx=node.getContext('2d');if(!ctx)return;
   ctx.scale(dpr,dpr);ctx.fillStyle='#ffffff';ctx.fillRect(0,0,width,height);
   const columns=112,rows=66;
   const sample=document.createElement('canvas');sample.width=columns;sample.height=rows;
   const sc=sample.getContext('2d',{willReadFrequently:true});if(!sc)return;
   sc.fillStyle='white';sc.fillRect(0,0,columns,rows);
   const fit=Math.min(width/photo.naturalWidth,height/photo.naturalHeight);
   const dw=photo.naturalWidth*fit,dh=photo.naturalHeight*fit;
   sc.drawImage(photo,(width-dw)/2/width*columns,(height-dh)/2/height*rows,dw/width*columns,dh/height*rows);
   const pixels=sc.getImageData(0,0,columns,rows).data;
   const ramp=' .,:;+=ox%#@';
   const cellW=width/columns,cellH=height/rows;
   ctx.font=`${cellH*1.05}px "Courier New", monospace`;
   ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#17212c';
   for(let y=0;y<rows;y++)for(let x=0;x<columns;x++){
    const offset=(y*columns+x)*4;
    const luma=.2126*pixels[offset]+.7152*pixels[offset+1]+.0722*pixels[offset+2];
    const density=Math.max(0,Math.min(1,(225-luma)/210));
    const glyph=ramp[Math.floor(density*(ramp.length-1))];
    if(glyph!==' ')ctx.fillText(glyph,(x+.5)*cellW,(y+.5)*cellH,cellW);
   }
   setRendered(current.src);
  };
  photo.onload=draw;
  photo.src=current.src;
  const observer=new ResizeObserver(draw);observer.observe(host);
  return()=>{disposed=true;observer.disconnect();photo.onload=null;};
 },[current.src]);
 return <div className="ascii-playground">
  <div className="ascii-stage" ref={stage} data-ascii={ascii&&ready} onPointerMove={event=>{
   const box=event.currentTarget.getBoundingClientRect();
   event.currentTarget.style.setProperty('--reveal-x',`${event.clientX-box.left}px`);
   event.currentTarget.style.setProperty('--reveal-y',`${event.clientY-box.top}px`);
   event.currentTarget.style.setProperty('--reveal-size','85px');
  }} onPointerLeave={event=>event.currentTarget.style.setProperty('--reveal-size','0px')}>
   <Image unoptimized src={current.src} alt={current.alt} width={1600} height={1600} priority className="source-photo"/>
   <canvas ref={canvas} className="ascii-canvas" aria-hidden="true"/>
   <Image unoptimized src={current.src} alt="" width={1600} height={1600} className="reveal-photo" aria-hidden="true"/>
   <span className="corner tl" aria-hidden="true">+</span><span className="corner tr" aria-hidden="true">+</span><span className="corner bl" aria-hidden="true">+</span><span className="corner br" aria-hidden="true">+</span>
  </div>
  <div className="ascii-controls"><Toggle pressed={ascii} onPressedChange={setAscii} className="ascii-toggle" aria-label="ASCII表示">{ascii?'[ ASCII ]':'[ PHOTO ]'}</Toggle><span aria-live="polite" className="image-counter">0{index+1} / 03</span><Button variant="ghost" className="next-image" onClick={()=>setIndex((index+1)%images.length)} aria-label="次の写真へ">NEXT <ArrowRight size={17}/></Button></div>
  <div className="ascii-caption"><span>{current.name}</span><span className="desktop-hint">MOVE TO DECODE</span><span className="mobile-hint">ASCII / PHOTO をタップ</span></div>
 </div>;
}
