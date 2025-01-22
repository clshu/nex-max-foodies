import Image from 'next/image'
import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import MainHeaderBackground from './main-header-background'

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/comminity">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
