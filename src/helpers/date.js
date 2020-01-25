const secsToDate = time => {
  const date = new Date(null);
  date.setTime(time);

  return date.toLocaleTimeString();
};

export default secsToDate;
