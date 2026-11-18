import AsciiPlayground from './ascii-playground';

export default function Home() {
 return <main id="top">
  <a className="skip" href="#music">コンテンツへ移動</a>
  <header className="site-header">
   <span aria-hidden="true" />
   <span className="header-caption">Ayala Alone Deer,<br/>OFFICIAL SITE</span>
   <nav aria-label="メインナビゲーション"><a href="#music"><small>01</small>MUSIC</a><a href="#media"><small>02</small>MEDIA</a></nav>
  </header>
  <section className="exhibit" aria-label="アーティストビジュアル">
   <div className="exhibit-index"><span className="eyebrow">Ayala Alone Deer,</span><p className="visual-title">BODY → TEXT<br/>TEXT → BODY</p><a className="text-link" href="#album">1ST ALBUM ↗</a></div>
   <AsciiPlayground/>
   <div className="exhibit-note"><span className="edition">( A/A/D, )</span><p>OFFICIAL SITE</p><a href="#album" className="down-link" aria-label="アルバムへ">↓</a></div>
  </section>
  <h1 className="artist-wordmark"><span>Ayala</span><span>Alone Deer,</span></h1>
  <div className="index-line"><span>Ayala Alone Deer,</span><span>OFFICIAL SITE</span><span>© 2026</span></div>
  <section id="album" className="catalog section-space">
   <div className="section-label"><h2>1ST ALBUM</h2><span>APPLIA</span></div>
   <div className="release-grid"><div className="real-cover"><AsciiPlayground coverOnly/></div><div className="release-details"><span className="catalog-code">Ayala Alone Deer, / 1ST ALBUM</span><h3 className="cover-title">APPLIA</h3><p className="coming-soon">COMING<br/>SOON</p></div></div>
  </section>
  <section id="music" className="section-space music-section">
   <div className="section-label"><h2>01 / MUSIC</h2><span>RELEASE</span></div>
   <div className="music-grid"><p className="catalog-code">Tokyo Community Radio<br/>2025.06.06 / TuneCore Japan</p><div><h3 className="collection-title">SESSIONS<br/>COLLECTION VOL.3</h3><p className="track">M09 <span>stillbody</span></p><a className="text-link" href="https://linkco.re/Yvz4hFms" target="_blank" rel="noopener noreferrer">Stream ↗</a></div></div>
  </section>
  <section id="media" className="section-space media-section">
   <div className="section-label"><h2>02 / MEDIA</h2><span>INTERVIEW</span></div>
   <div className="media-heading"><p>Tokyo Community Radio — INTERVIEW</p><a className="text-link" href="https://www.youtube.com/watch?v=_2akbuwoqq0" target="_blank" rel="noopener noreferrer">YouTube ↗</a></div>
   <div className="video"><iframe src="https://www.youtube-nocookie.com/embed/_2akbuwoqq0" title="Tokyo Community Radio インタビュー動画" loading="lazy" allow="encrypted-media; picture-in-picture; web-share" allowFullScreen/></div>
  </section>
  <footer><span aria-hidden="true" /><span>Ayala Alone Deer,<br/>OFFICIAL SITE</span><span>© 2026 Ayala Alone Deer,</span><a href="#top" className="text-link">TOP ↑</a></footer>
 </main>;
}
