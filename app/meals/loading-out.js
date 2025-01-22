import classes from './loading.module.css'

export default function Loading() {
  return (
    <div>
      <p className={classes.loading}>Fetching meals...</p>
    </div>
  )
}
