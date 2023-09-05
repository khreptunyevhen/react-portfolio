const getLoaderBg = () => {
  const loader = document.querySelector(".loader");

  const receiveTheme = window.localStorage.getItem("theme");
  const bgColor = JSON.parse(receiveTheme) === "dark" ? "#000" : "#fff";

  loader.style.backgroundColor = bgColor;
};

getLoaderBg();
