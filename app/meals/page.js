import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from './meals-grid'

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delcious Meals, create{' '}
          <span className={classes['highlight']}>your own</span>
        </h1>
        <p>Choose your favorite recipe and enjoy a delicious meal at home</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  )
}
