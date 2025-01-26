const dots = document.querySelectorAll(".dot");
const activeDot = document.getElementById("activeDot");
const infoSection = document.getElementById("infoSection");

let currentPosition = 0;
let currentPrimaryIconId = "primary-icon-1";
let imgWrapperId = "img-wrapper-0";
const xOffset = 20; // width of dot + 8px gap

const noteImg = "./note.svg";
const searchImg = "./search.svg";
const fileImg = "./file.svg";
const checkImg = "./check.svg";
const features = [
  {
    primaryIcon: noteImg,
    primaryIconAlt: "Note",
    badgeIcon: searchImg,
    badgeIconAlt: "Search",
  },
  {
    primaryIcon: fileImg,
    primaryIconAlt: "File",
    badgeIcon: checkImg,
    badgeIconAlt: "Check",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  dots?.forEach?.((dot, index) => {
    dot.classList.add("init-move");
    dot.style.setProperty("--x-offset", `${index * xOffset}px`);
  });
  const currentImgWrapper = document.createElement("div");
  currentImgWrapper.classList.add("current-img-wrapper");
  currentImgWrapper.id = imgWrapperId;
  const imgContent = document.createElement("div");
  const primaryImg = document.createElement("img");
  primaryImg.src = features?.[0]?.primaryIcon;
  primaryImg.alt = features?.[0]?.primaryIconAlt;
  primaryImg.classList.add("primary-icon");
  primaryImg.id = currentPrimaryIconId;
  const primaryBadgeImg = document.createElement("img");
  primaryBadgeImg.src = features?.[0]?.badgeIcon;
  primaryBadgeImg.alt = features?.[0]?.badgeIconAlt;
  primaryBadgeImg.classList.add("primary-badge-icon");
  primaryBadgeImg.id = currentPrimaryIconId;
  imgContent.append(primaryImg, primaryBadgeImg);
  currentImgWrapper.append(imgContent);
  infoSection.append(currentImgWrapper);
});

window.handleClick = function (position) {
  currentPosition = position;
  activeDot.style.setProperty(
    "--active-x-offset",
    `${Math.abs(currentPosition * xOffset)}px`
  );
  const currentImgWrapper = document.getElementById(imgWrapperId);
  currentImgWrapper.classList.add("disappear");
  const newImgWrapper = document.createElement("div");
  newImgWrapper.id = `img-wrapper-${position}`;
  newImgWrapper.classList.add("new-img-wrapper");
  const imgContent = document.createElement("div");
  const newPrimaryImg = document.createElement("img");
  newPrimaryImg.src = features?.[position]?.primaryIcon;
  newPrimaryImg.alt = features?.[position]?.primaryIconAlt;
  newPrimaryImg.classList.add("updated-primary-icon");
  const newBadgeImg = document.createElement("img");
  newBadgeImg.src = features?.[position]?.badgeIcon;
  newBadgeImg.alt = features?.[position]?.badgeIconAlt;
  newBadgeImg.classList.add("updated-badge-icon");
  imgContent.append(newPrimaryImg, newBadgeImg);
  newImgWrapper.append(imgContent);
  infoSection.append(newImgWrapper);
  window.setTimeout(() => {
    currentImgWrapper.remove();
    imgWrapperId = `img-wrapper-${position}`;
    newImgWrapper.classList.remove("new-img-wrapper");
    newImgWrapper.classList.add("current-img-wrapper");
  }, 750);
};
