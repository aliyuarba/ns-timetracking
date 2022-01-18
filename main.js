import { masterdata } from "./data.js";

const data = [...masterdata];

const ui = [
  ["lightorange", "./images/icon-work.svg"],
  ["softblue", "./images/icon-play.svg"],
  ["lightred", "./images/icon-study.svg"],
  ["limegreen", "./images/icon-exercise.svg"],
  ["violet", "./images/icon-social.svg"],
  ["softorange", "./images/icon-self-care.svg"],
];

for (let i = 0; i < data.length; i++) {
  data[i].bg = ui[i][0];
  data[i].img = ui[i][1];
}

const el = (index) => {
  return `
      <div class="col-md-4 col-sm-6">

        <div class="tile${index + 1} bg-${data[index].bg} rounded-5 mb-3">
          <div class="overflow-hidden position-relative" style="height: 3rem;">
            <img src="${
              data[index].img
            }" alt="" class="position-absolute top-0 end-0">
          </div>

          <div class="inner-tile bg-darkblue text-light p-4 rounded-5">
            <div class="d-flex justify-content-between mb-3">
              <span>${data[index].title}</span><strong>. . .</strong>
            </div>
            <div class='d-flex flex-sm-column'>
              <h1 class="current display-4 mb-0 mt-auto">${
                data[index].timeframes.weekly.current
              }hrs</h1>
              <p class='previous mb-auto mt-auto ms-auto ms-sm-0 text-desaturatedblue'>Last week - ${
                data[index].timeframes.weekly.previous
              }hrs</p>
            </div>
          </div>
        </div>
      </div>
      `;
};

const target = document.getElementById("tiles");

for (let i = 0; i < data.length; i++) {
  target.insertAdjacentHTML("beforeend", el(i));
}

const timeUnit = {
  weekly: "week",
  daily: "day",
  monthly: "month",
};

$(".link").click(function () {
  let timestamp = $(this).html();

  for (let i = 0; i < data.length; i++) {
    $(`.tile${i + 1} .current`).html(
      `${data[i].timeframes[timestamp].current}hrs`
    );
    $(`.tile${i + 1} .previous`).html(
      `Last ${timeUnit[timestamp]} - ${data[i].timeframes[timestamp].previous}hrs`
    );
  }

  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});
