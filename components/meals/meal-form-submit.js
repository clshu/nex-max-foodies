export default function MealFormSubmit({ pending }) {
  return (
    <>
      <button disabled={pending}>
        {pending ? 'Submitting...' : 'Share Meal'}
      </button>
    </>
  )
}
