import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from './meals-grid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'

async function Meals() {
  const meals = await getMeals()
  return <MealsGrid meals={meals} />
}

export default async function MealsPage() {
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
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
