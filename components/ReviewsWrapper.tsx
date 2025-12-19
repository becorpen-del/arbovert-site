'use client';

import dynamic from 'next/dynamic';

const GoogleReviews = dynamic(() => import('./GoogleReviews'), {
  ssr: false
});

interface ReviewsWrapperProps {
  maxReviews?: number;
  showRating?: boolean;
}

const ReviewsWrapper = ({ maxReviews = 6, showRating = true }: ReviewsWrapperProps) => {
  return (
    <GoogleReviews 
      maxReviews={maxReviews}
      showRating={showRating}
    />
  );
};

export default ReviewsWrapper;

