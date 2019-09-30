export const scrollTo = ypos => {
  const interval = 20; // in px
  const speed = 16.66;

  const intervalId = setInterval(() => {
    if (window.pageYOffset === ypos) {
      clearInterval(intervalId);
    }
    window.scrollTo(0, window.pageYOffset - interval);
  }, speed);
};
