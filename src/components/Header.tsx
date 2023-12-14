
import { GithubLogo, House, ImageSquare, VideoCamera } from 'phosphor-react'
import styles from './Header.styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>blog</h1>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          <li> <a href="#"> <House /> Posts  </a></li>
          <li> <a href="#"> <ImageSquare /> Images </a> </li>
          <li> <a href="#"> <VideoCamera /> Videos </a></li>
        </ul>
      </nav>

      <div>
        <button> <GithubLogo weight='bold' /> Github</button>
      </div>
    </header>
  )
}
