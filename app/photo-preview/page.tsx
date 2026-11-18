'use client';
import { useState } from 'react';
import styles from './photo.module.css';

export default function PhotoPreview(){
 const [menu,setMenu]=useState(false);
 return <div className={styles.site} id="photo-top">
  <aside className={styles.sidebar}>
   <a className={styles.brand} href="#photo-top" onClick={()=>setMenu(false)} aria-label="Ayala Alone Deer, トップ">Ayala<br/>Alone Deer,<small>OFFICIAL SITE</small></a>
   <button className={styles.menuButton} aria-expanded={menu} aria-controls="photo-navigation" onClick={()=>setMenu(!menu)}>{menu?'CLOSE −':'MENU +'}</button>
   <nav id="photo-navigation" className={`${styles.nav} ${menu?styles.navOpen:''}`} aria-label="メインナビゲーション">
    <a href="#photo-album" onClick={()=>setMenu(false)}>ALBUM</a><a href="#photo-music" onClick={()=>setMenu(false)}>MUSIC</a><a href="#photo-video" onClick={()=>setMenu(false)}>VIDEO</a><a href="#photo-gallery" onClick={()=>setMenu(false)}>GALLERY</a>
   </nav>
   <span className={styles.sideNote}>Ayala Alone Deer,<br/>© 2026</span>
  </aside>
  <div className={styles.content}>
   <section className={styles.hero} aria-label="Ayala Alone Deer, アーティスト写真">
    <img src="/ayala-connect.jpg" alt="ケーブルを差し込むAyala Alone Deer,のアーティスト写真" fetchPriority="high" className={styles.heroPhoto}/>
    <div className={styles.heroTitle}><span>Ayala</span><span>Alone Deer,</span></div>
    <a href="#photo-album" className={styles.scroll}>SCROLL <span>↓</span></a>
   </section>
   <section id="photo-album" className={styles.album}>
    <h2 className={styles.sectionHeading}>MUSIC</h2>
    <div className={styles.albumGrid}>
     <div className={styles.albumCopy}><p className={styles.overline}>1ST ALBUM<br/>COMING SOON</p><h1>APPLIA</h1><span className={styles.artistCredit}>Ayala Alone Deer,</span><a className={styles.outlineLink} href="#photo-music">More Music <span>→</span></a></div>
     <figure className={styles.cover}><img src="/ayala-cover.webp" alt="APPLIAのジャケット。鹿と人の顔が重なるアートワーク" loading="lazy" width="1600" height="1600"/><figcaption>APPLIA / 1ST ALBUM</figcaption></figure>
    </div>
   </section>
   <section id="photo-music" className={styles.music}>
    <h2 className={styles.sectionHeading}>RELEASE</h2>
    <div className={styles.releaseRow}><p className={styles.releaseMeta}>Tokyo Community Radio<br/>2025.06.06 / TuneCore Japan</p><div><h3>SESSIONS<br/>COLLECTION VOL.3</h3><p className={styles.track}><small>M09</small> stillbody</p><a className={styles.outlineLink} href="https://linkco.re/Yvz4hFms" target="_blank" rel="noopener noreferrer">Stream <span>↗</span></a></div></div>
   </section>
   <section id="photo-video" className={styles.videoSection}>
    <div className={styles.sectionTop}><h2 className={styles.sectionHeading}>VIDEO</h2><a className={styles.simpleLink} href="https://www.youtube.com/watch?v=_2akbuwoqq0" target="_blank" rel="noopener noreferrer">YouTube ↗</a></div>
    <div className={styles.videoFrame}><iframe src="https://www.youtube-nocookie.com/embed/_2akbuwoqq0" title="Tokyo Community Radio インタビュー動画" loading="lazy" allow="encrypted-media; picture-in-picture; web-share" allowFullScreen/></div>
    <p className={styles.videoCaption}>Tokyo Community Radio <span>INTERVIEW</span></p>
   </section>
   <section id="photo-gallery" className={styles.gallery}>
    <h2 className={styles.sectionHeading}>GALLERY</h2>
    <div className={styles.galleryGrid}><figure><img src="/ayala-portrait-front.webp" alt="白い衣装のAyala Alone Deer,の全身アーティスト写真" width="1245" height="2000" loading="lazy"/><figcaption>01 — PORTRAIT</figcaption></figure><figure><img src="/ayala-connect.jpg" alt="ケーブルと身体をモチーフにしたAyala Alone Deer,の写真" width="662" height="1009" loading="lazy"/><figcaption>02 — CONNECT</figcaption></figure></div>
   </section>
   <footer className={styles.footer}><a href="#photo-top" className={styles.footerName}>Ayala Alone Deer,</a><div><span>© 2026 Ayala Alone Deer,</span><a href="#photo-top">BACK TO TOP ↑</a></div></footer>
  </div>
 </div>
}
