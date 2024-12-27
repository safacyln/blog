import type { Metadata } from 'next'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mustafa CEYLAN - Kişisel Blog',
  description: 'Mustafa CEYLAN kişisel blog sitesi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        <header>
          <div className="header-content">
            <div className="site-branding">
              <h1>MUSTAFA CEYLAN</h1>
              <div className="social-links">
                <a href="https://github.com/safacyln" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/safacyln/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://x.com/safacylnn" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter size={20} />
                  <span>X (Twitter)</span>
                </a>
              </div>
            </div>
            <nav>
              <ul className="main-nav">
                <li>
                  <Link href="/">Ana Sayfa</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/hakkimda">Hakkımda</Link>
                </li>
                <li>
                  <Link href="/iletisim">İletişim</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}

        <footer>
          <p>&copy; 2024 Mustafa CEYLAN. Tüm hakları saklıdır.</p>
        </footer>
      </body>
    </html>
  )
}
