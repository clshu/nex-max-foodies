import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'fs'

const db = sql('meals.db')

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // throw new Error('Failed to fetch meals')
  return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal) {
  const slug = slugify(meal.title, { lower: true })
  meal.slug = slug + '-' + getRandomInt(100000).toString(16)
  meal.instructions = xss(meal.instructions)

  // const extension = meal.image.match(/data:image\/([^;]+);base64,(.*)/)
  const extension = meal.image.name.split('.').pop()
  const filename = `${meal.slug}.${extension}`
  const path = `public/images/${filename}`

  const stream = fs.createWriteStream(path, { flags: 'w' })
  const bufferedImage = await meal.image.arrayBuffer()
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      console.error(error)
      throw new Error('Failed to save image')
    }
  })
  stream.end()

  console.log(meal)
  // /public is not part of the image path in the database
  // because the image is served as a static file
  // the request will search /public in the root directory by default
  meal.image = `/images/${filename}`

  db.prepare(
    `INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (@slug, @title,  @image, @summary, @instructions, @creator, @creator_email)`
  ).run(meal)
}
