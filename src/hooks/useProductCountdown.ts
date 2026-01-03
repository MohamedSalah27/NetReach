import { useState, useEffect } from 'react';
import {
  getRemainingTime,
  calculateDiscount,
} from '../utils/helpers/productUtils';

export const useProductCountdown = (
  product: { price: number; discountPercentage: number },
  targetDate: Date
) => {
  const [timeLeft, setTimeLeft] = useState(() => getRemainingTime(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = getRemainingTime(targetDate);
      setTimeLeft(updatedTime);
      if (updatedTime.isExpired) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return {
    timeLeft,
    discountedPrice: calculateDiscount(
      product.price,
      product.discountPercentage
    ),
    hasDiscount: !timeLeft.isExpired && product.discountPercentage > 0,
  };
};
