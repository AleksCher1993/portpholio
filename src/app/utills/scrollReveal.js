import ScrollReveal from "scrollreveal";
ScrollReveal({
    delay: 200,
    reset: false,
    duration: 2000,
    distance: "80px",
  });
export const scrollReveal = () => {
  ScrollReveal().reveal(".headline", {
    delay: 600,
    origin: "left",
  });
  ScrollReveal().reveal(".leftline", {
    origin: "left",
  });
  ScrollReveal().reveal(".specialleftline", {
    origin: "left",
    distance:"0px",
    duration:2000,
    interval: 200,
    easing:'ease',
  });
  ScrollReveal().reveal(".topline", {
    origin: "top",
  });
  ScrollReveal().reveal(".bottomline", {
    origin: "bottom",
  });
  ScrollReveal().reveal(".rightline", {
    origin: "right",
  });
};
