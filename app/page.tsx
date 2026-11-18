import Image from 'next/image';

const STREAM_URL = 'https://linkco.re/Yvz4hFms';
const VIDEO_ID = '_2akbuwoqq0';

export default function Home() {
 return <main id="top">
  <header className="site-header">
   <a href="#top" className="header-name">Ayala Alone Deer,</a>
   <nav aria-label="メインナビゲーション"><a href="#music">MUSIC</a><a href="#media">MEDIA</a></nav>
  </header>

  <section className="page hero">
   <Image unoptimized className="apple" src="/apple.webp" width="802" height="533" alt="半分に切られたりんごと包丁のモノクロ写真" priority/>
   <h1>Ayala<br/>Alone Deer,</h1>
   <p className="official">OFFICIAL SITE</p>
  </section>

  <section className="page soon" aria-label="1stアルバム">
   <Image unoptimized className="collage" src="/collage.webp" width="573" height="798" alt="" aria-hidden="true"/>
   <p className="soon-label">1ST ALBUM</p>
   <p className="soon-title">COMING<br/>SOON</p>
  </section>

  <section id="music" className="block">
   <h2>MUSIC</h2>
   <p className="meta">Tokyo Community Radio<br/>2025.06.06 / TuneCore Japan</p>
   <p className="release">SESSIONS COLLECTION VOL.3</p>
   <p className="track"><span>M09</span> stillbody</p>
   <a className="pill" href={STREAM_URL} target="_blank" rel="noopener noreferrer">Stream ↗</a>
  </section>

  <section id="media" className="block">
   <h2>MEDIA</h2>
   <p className="meta">Tokyo Community Radio — INTERVIEW</p>
   <div className="video"><iframe src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`} title="Tokyo Community Radio インタビュー動画" loading="lazy" allow="encrypted-media; picture-in-picture; web-share" allowFullScreen/></div>
   <a className="pill" href={`https://www.youtube.com/watch?v=${VIDEO_ID}`} target="_blank" rel="noopener noreferrer">YouTube ↗</a>
  </section>

  <footer>© 2026 Ayala Alone Deer,</footer>
 </main>;
}
