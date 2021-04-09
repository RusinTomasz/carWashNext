import React from "react";
import Star from "../star/Star";

interface StarsRaterNodes {
  isRating: boolean;
  rating: number;
  interactive: boolean;
  total: number;
  starsLinkColor?: string;
  onRate: Function;
  willRate: Function;
}

const StarsRaterNodes = (props: StarsRaterNodes) => {
  const {
    isRating,
    rating,
    interactive,
    total,
    onRate,
    willRate,
    starsLinkColor,
  } = props;

  let nodes = Array(total)
    .fill(0)
    .map((_, i) => {
      let starProps = {
        isActive: !isRating && rating - i >= 1,
        willBeActive: isRating && i < rating,
        isActiveHalf: !isRating && rating - i >= 0.5 && rating - i < 1,
        isDisabled: !interactive,
      };

      return (
        <div
          key={`star-${i}`}
          onClick={interactive ? onRate.bind(this, i + 1) : null}
          onMouseOver={interactive ? willRate.bind(this, i + 1) : null}
        >
          <Star starsLinkColor={starsLinkColor} {...starProps} />
        </div>
      );
    });

  return <>{nodes}</>;
};

export default StarsRaterNodes;
