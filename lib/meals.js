import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // throw new Error('Failed to fetch meals')
  return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)

  // const stmt = db.prepare('INSERT INTO meals VALUES (?, ?, ?, ?, ?, ?, ?)')
  // stmt.run(
  //   slug,
  //   meal.title,
  //   meal.summary,
  //   meal.instructions,
  //   meal.image,
  //   meal.creator,
  //   meal.creator_email
  // )
}
