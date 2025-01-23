'use server'

import { redirect } from 'next/navigation'
import { saveMeal } from './meals'

function isInvalidText(text) {
  return !text || text.trim() === ''
}

export async function shareMeal(prevStae, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@')
  ) {
    console.log(meal)
    return {
      message: 'Invalid input',
    }
  }

  if (!meal.image || meal.image.size == 0) {
    return {
      message: 'Invalid image',
    }
  }

  await saveMeal(meal)

  redirect('/meals')
}
