import Review from "../types/Review";

const countScoreFromReviews = (reviews: Review[]) => {
  let score = 0;
  if (!(reviews.length > 0)) {
    return 0;
  }
  reviews.map((review) => (score += review.points));
  return score / reviews.length;
};

export default countScoreFromReviews;
