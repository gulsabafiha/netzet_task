'use client'
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <div className={styles.wrapper}>
      {/* Top Gradient Banner */}
      <div className={styles.topBanner}>
        <span className={styles.bannerText}>
          🚀 <span className={styles.bannerTextBold}>FRESH BEGINNINGS SALE:</span> <b>Extra 25% OFF, Limited Spots - start your journey today!</b>
        </span>
      </div>

      {/* Header: Logo + Navigation */}
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image src="/logo.png" alt="Fametonic Logo" width={173.12} height={74} className={styles.logo} />
        </div>
        <button className={styles.menuIcon} onClick={toggleMenu} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <a href="#about" className={styles.navLink}>About us</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className={styles.main}>
        <section className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h2 className={styles.heroSubtitle}>
            <span>Discover your way to success with Fametonic:</span>
          </h2>
          <ul className={styles.featuresList}>
            <li><Image src="/✨.png" alt="feature icon" width={22} height={22} /> Start growing your influence right away—no waiting required!</li>
            <li><Image src="/✨.png" alt="feature icon" width={22} height={22} /> Create viral TikToks and Reels step by step with easy-to-follow lessons</li>
            <li><Image src="/✨.png" alt="feature icon" width={22} height={22} /> Use a Personal AI Worker to boost your content</li>
            <li><Image src="/✨.png" alt="feature icon" width={22} height={22} /> Learn from expert-led courses designed for aspiring influencers</li>
          </ul>
          <div className={styles.ctaContainer}>
            <a href="#get-started" className={styles.ctaBtn}>GET STARTED</a>
            <div className={styles.ctaSubtext}>1-minute quiz for personalized Insights</div>
            <div className={styles.ctaTerms}>
              By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
            </div>
            <div className={styles.copyright}>
              Fametonic 2025 ©All Rights Reserved.
            </div>
          </div>
        </section>
        <section className={styles.heroImageSection}>
          <Image src="/banner-img.png" alt="Hero Banner" width={500} height={500} className={styles.heroImage} priority />
        </section>
      </main>
    </div>
  );
}
