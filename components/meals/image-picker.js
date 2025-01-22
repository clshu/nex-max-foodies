'use client'
import { useRef } from 'react'
import classes from './image-picker.module.css'

export default function ImagePicker({ label, name }) {
  const imageRef = useRef()

  function handleImagePick() {
    imageRef.current.click()
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <input
          className={classes.input}
          type="file"
          accept="image/png image/jpeg"
          id={name}
          name={name}
          ref={imageRef}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImagePick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  )
}
