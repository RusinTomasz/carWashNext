import axios from "axios";

interface addReviewArgs {
  refId: number;
  authorName: string;
  message: string;
  starsValue: number;
}

const addReview = async (review: addReviewArgs) => {
  const { authorName, message, starsValue, refId } = review;

  const reviewToAdd = {
    authorName: authorName,
    content: message,
    blocked: true,
    points: starsValue,
    related: [
      {
        refId: refId,
        ref: "car-wash",
        field: "comments",
      },
    ],
  };

  try {
    const addedReview = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/comments/car-wash:${refId}`,
      reviewToAdd,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return addedReview;
  } catch (error) {
    return;
  }
};

export default addReview;
