import React from "react";
import ReviewsModal from "../../../modals/reviewsModal/ReviewsModal";
import ModalActionButton from "../../../../styles/shared/buttons/ModalActionButton";

interface ReviewsModalListProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  openModal: () => void;
}

const ReviewsModalList = (props: ReviewsModalListProps) => {
  const { isModalOpen, handleCloseModal, openModal } = props;

  return (
    <>
      <ModalActionButton
        text={"Zobacz wszystkie opinie"}
        openModal={openModal}
      />
      <ReviewsModal isModalOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ReviewsModalList;
