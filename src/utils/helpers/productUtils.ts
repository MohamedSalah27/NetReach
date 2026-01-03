export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const calculateDiscount = (
  price: number,
  discountPercentage: number
): number => {
  return Math.round(price * (1 - discountPercentage / 100) * 100) / 100;
};

export const getRemainingTime = (targetDate: Date): CountdownTime => {
  const total = targetDate.getTime() - new Date().getTime();
  if (total <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };

  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / 1000 / 60) % 60),
    seconds: Math.floor((total / 1000) % 60),
    isExpired: false,
  };
};
