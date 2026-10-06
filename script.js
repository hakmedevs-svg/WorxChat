* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #07111f;
  --bg-soft: #0d1b2a;
  --panel: rgba(13, 27, 42, 0.8);
  --panel-strong: #0f1d2f;
  --card: #122538;
  --card-alt: #132c44;
  --primary: #62d0ff;
  --primary-strong: #4eb7ff;
  --secondary: #9b7bff;
  --success: #7cf2c7;
  --text: #edf7ff;
  --muted: #b3c7d9;
  --line: rgba(255, 255, 255, 0.08);
  --shadow: 0 26px 60px rgba(13, 24, 39, 0.5);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Cairo", sans-serif;
  background:
    radial-gradient(circle at top right, rgba(98, 208, 255, 0.18), transparent 30%),
    radial-gradient(circle at bottom left, rgba(155, 123, 255, 0.18), transparent 25%),
    var(--bg);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

 a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: rgba(7, 17, 31, 0.52);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #03121d;
  font-weight: 900;
  box-shadow: 0 10px 24px rgba(98, 208, 255, 0.5);
}

.brand-mark.small {
  width: 28px;
  height: 28px;
  border-radius: 10px;
  font-size: 0.82rem;
}

.nav-menu {
  display: flex;
  gap: 24px;
  color: var(--muted);
  font-size: 0.98rem;
}

.nav-menu a {
  transition: color 0.2s ease;
}

.nav-menu a:hover {
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 14px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #06151f;
  box-shadow: 0 12px 26px rgba(98, 208, 255, 0.35);
}

.btn-secondary,
.btn-outline {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-color: rgba(255, 255, 255, 0.12);
}

.hero {
  padding: 72px 0 48px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 36px;
}

.pill,
.eyebrow {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(98, 208, 255, 0.09);
  border: 1px solid rgba(98, 208, 255, 0.22);
  color: var(--primary);
  font-weight: 700;
  font-size: 0.82rem;
}

.hero-copy h1 {
  margin-top: 20px;
  font-size: clamp(2.5rem, 4vw, 5rem);
  line-height: 1.06;
  letter-spacing: -0.04em;
}

.hero-copy p {
  max-width: 620px;
  margin-top: 18px;
  color: var(--muted);
  line-height: 1.9;
  font-size: 1.08rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.mini-stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 28px;
}

.mini-stats li {
  min-width: 110px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-inline-start: 1px solid var(--line);
  padding-inline-start: 18px;
}

.mini-stats strong {
  font-size: 1.4rem;
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.chat-window {
  width: min(100%, 540px);
  background: linear-gradient(180deg, rgba(15, 29, 47, 0.96), rgba(6, 18, 29, 0.95));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.chat-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 18px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #03131c;
  font-weight: 800;
}

.chat-header small {
  display: block;
  color: var(--success);
  font-size: 0.72rem;
}

.messages {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 22px 18px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(109, 157, 210, 0.03));
}

.message {
  max-width: 78%;
  padding: 12px 14px;
  border-radius: 18px;
  line-height: 1.8;
  font-size: 0.95rem;
}

.message.incoming {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.04);
  color: var(--text);
  align-self: flex-start;
  border-bottom-right-radius: 6px;
}

.message.outgoing {
  background: linear-gradient(135deg, rgba(98, 208, 255, 0.25), rgba(155, 123, 255, 0.22));
  border: 1px solid rgba(98, 208, 255, 0.2);
  color: var(--text);
  align-self: flex-end;
  border-bottom-left-radius: 6px;
}

.composer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 18px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--muted);
}

.composer button {
  border: none;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #03151d;
  font-weight: 800;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
}

.features,
.why,
.faq {
  padding: 48px 0;
}

.section-heading {
  margin-bottom: 28px;
}

.section-heading h2 {
  margin-top: 12px;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.2;
}

.narrow {
  max-width: 720px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card {
  background: linear-gradient(180deg, rgba(18, 37, 56, 0.9), rgba(10, 22, 34, 0.9));
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 22px;
  box-shadow: 0 18px 30px rgba(7, 18, 28, 0.2);
}

.feature-card .icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: rgba(98, 208, 255, 0.08);
  font-size: 1.6rem;
  margin-bottom: 18px;
}

.feature-card h3 {
  margin-bottom: 12px;
  font-size: 1.3rem;
}

.feature-card p {
  color: var(--muted);
  line-height: 1.8;
}

.two-col {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
}

.content-block h2 {
  margin-top: 12px;
  font-size: clamp(2rem, 2.5vw, 2.8rem);
}

.content-block p {
  margin-top: 16px;
  color: var(--muted);
  line-height: 1.9;
}

.check-list {
  list-style: none;
  margin-top: 24px;
  display: grid;
  gap: 14px;
}

.check-list li {
  position: relative;
  padding-inline-start: 28px;
  color: var(--text);
}

.check-list li::before {
  content: "✓";
  position: absolute;
  inset-inline-start: 0;
  color: var(--success);
  font-weight: 900;
}

.stats-panel {
  display: grid;
  gap: 18px;
}

.stat-box {
  background: linear-gradient(180deg, rgba(18, 37, 56, 0.95), rgba(12, 25, 37, 0.94));
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 22px 26px rgba(7, 18, 28, 0.2);
}

.stat-number {
  font-size: clamp(2rem, 2vw, 2.6rem);
  font-weight: 900;
  color: var(--primary);
}

.stat-label {
  color: var(--muted);
}

.faq-list {
  display: grid;
  gap: 16px;
}

.faq-list details {
  background: rgba(16, 29, 41, 0.93);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 20px;
}

.faq-list summary {
  cursor: pointer;
  list-style: none;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list summary::after {
  content: "+";
  color: var(--primary);
  font-size: 1.5rem;
}

.faq-list details[open] summary::after {
  content: "−";
}

.faq-list details p {
  margin-top: 14px;
  color: var(--muted);
  line-height: 1.8;
}

.cta-block {
  padding: 40px 0 80px;
}

.cta-box {
  background: linear-gradient(135deg, rgba(98, 208, 255, 0.12), rgba(155, 123, 255, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  padding: 30px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

.cta-box h2 {
  font-size: clamp(1.8rem, 2vw, 2.4rem);
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 26px 0 36px;
  background: rgba(255, 255, 255, 0.01);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
}

.footer-meta {
  text-align: end;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer-meta a {
  color: var(--primary);
}

@media (max-width: 920px) {
  .hero-inner,
  .two-col,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .nav {
    flex-wrap: wrap;
    padding: 18px 0;
  }

  .nav-menu {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-box,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .hero {
    padding-top: 48px;
  }

  .btn {
    width: 100%;
  }

  .cta-row {
    flex-direction: column;
  }

  .chat-window {
    border-radius: 20px;
  }

  .message {
    max-width: 88%;
  }
}

