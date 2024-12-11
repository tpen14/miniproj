import { useState, useRef } from "react"
import { Stars } from "../Stars/Stars"
import propTypes from 'prop-types'

export const KeyboardReviewForm = (props) => {
  const [rating, setRating] = useState(null)
  const nicknameRef = useRef(null)
  const reviewRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!rating) {
      alert("Please select a star rating.");
      return;
    }

    const newReview = {
      reviewer: nicknameRef.current.value,
      review: reviewRef.current.value,
      rating: rating,
    }

    props.onAddReview(newReview)
    setRating(null);
    nicknameRef.current.value = ""
    reviewRef.current.value = ""
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nickname"
        id="nickname"
        placeholder="nickname"
        ref={nicknameRef}
        required
      />
      <br />
      <Stars rating={rating} setRating={setRating} />
      <textarea
        name="review"
        id="review"
        placeholder="Write your own review..."
        ref={reviewRef}
        required
      ></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}
KeyboardReviewForm.propTypes={
    onAddReview:propTypes.func
}
