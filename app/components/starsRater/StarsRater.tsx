import React, { Children, useEffect, useState } from "react";
import styled from "styled-components";

import StarsRaterNodes from "./starsRaterNodes/StarsRaterNodes";

interface StarsRaterProps {
  total: number;
  rating: number;
  interactive: boolean;
  children?: any;
  onRate?: Function;
  onRating?: Function;
  onCancelRate?: Function;
}

const Rater = styled.div`
  display: inline-block;
  line-height: normal;
  > * {
    display: inline-block;
  }
`;

const StarsRater = (props: StarsRaterProps) => {
  let { total, interactive, children, ...restProps } = props;
  delete restProps.rating;
  delete restProps.onRate;
  delete restProps.onRating;
  delete restProps.onCancelRate;

  children = Children.toArray(children);

  const [rating, setRating] = useState<number>();
  const [lastRating, setLastRating] = useState<number>();
  const [isRating, setIsRating] = useState<boolean>();

  useEffect(() => {
    const { rating } = props;
    setRating(rating);
    setLastRating(rating);
  }, [props.rating]);

  const willRate = (rating: number, e: MouseEvent) => {
    setRating(rating);
    setIsRating(true);
    const { onRating: callback } = props;
    callback && callback({ ...e, rating });
  };

  const onRate = (rating: number, e: MouseEvent) => {
    setRating(rating);
    setLastRating(rating);
    setIsRating(true);
    const { onRate: callback } = props;
    callback && callback({ ...e, rating });
  };

  const onCancelRate = () => {
    setRating(lastRating);
    setIsRating(false);
    const { onCancelRate: callback } = props;
    callback && callback({ rating });
  };

  return (
    <Rater
      className="react-rater"
      onMouseOut={interactive ? onCancelRate.bind(this) : null}
      {...restProps}
    >
      <StarsRaterNodes
        interactive={interactive}
        rating={rating}
        isRating={isRating}
        children={children}
        total={total}
        onRate={onRate}
        willRate={willRate}
      />
    </Rater>
  );
};

StarsRater.defaultProps = {
  total: 5,
  rating: 0,
  interactive: true,
};

export default StarsRater;
