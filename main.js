const btnCount = 0;

const downBtnClick = () => {
  if (btnCount === 0) {
    document.querySelector(".specInfo").style.display = "block";
    btnCount = 1;
  } else {
    document.querySelector(".specInfo").style.display = "-webkit-box";
    btnCount = 0;
  }
};
