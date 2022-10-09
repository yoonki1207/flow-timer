export const getTimeText = (gap) => {
  const d = Math.floor(gap / (1000 * 60 * 60 * 24)); // 일
  const h = Math.floor((gap / (1000 * 60 * 60)) % 24); // 시
  const m = Math.floor((gap / (1000 * 60)) % 60); // 분
  const s = Math.floor((gap / 1000) % 60); // 초

  if (m < 0 || s < 0) {
    return "TIME OUT!";
  } else {
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
};
