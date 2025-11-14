export const GA_MEASUREMENT_ID = "G-D7CH7KETG6";

export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
