import React from "react";
import ReviewsModal from "../../../modals/reviewsModal/ReviewsModal";
import ModalActionButton from "../../../../styles/shared/buttons/ModalActionButton";
import Review from "../../../../types/Review";
import CarWashType from "../../../../types/CarWash";

interface ReviewsModalListProps {
  isModalOpen: boolean;
  reviews: Review[];
  carWashData: CarWashType;
  reviewsScore: number;
  reviewsCount: number;
  handleCloseModal: () => void;
  openModal: () => void;
}

const ReviewsModalList = (props: ReviewsModalListProps) => {
  const {
    carWashData,
    reviewsScore,
    reviewsCount,
    reviews,
    isModalOpen,
    handleCloseModal,
    openModal,
  } = props;

  return (
    <>
      <ModalActionButton
        text={"Zobacz wszystkie opinie"}
        openModal={openModal}
      />
      <ReviewsModal
        carWashData={carWashData}
        reviewsScore={reviewsScore}
        reviewsCount={reviewsCount}
        reviews={reviews}
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ReviewsModalList;
