const log = console.log;

let sliderBtn = document.querySelector('input[type="checkbox"]'),
    configScheme = window.matchMedia('(prefers-color-scheme: dark)')
    totalFollow = 0;

function generateViewsRandom(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function renderTotalFollowers(valueRandom) {
  let countFollow = document.querySelector('#countFollow');

  totalFollow += valueRandom;
  countFollow.textContent = totalFollow.toString();

  if(countFollow.textContent.length === 6) {
    countFollow.textContent = `${totalFollow.toString().substr(0,3)},${totalFollow.toString().substr(3, totalFollow.toString().length)}`;
  }
  else if(countFollow.textContent.length === 5) {
    countFollow.textContent = `${totalFollow.toString().substr(0,2)},${totalFollow.toString().substr(2, totalFollow.toString().length)}`;
  }
}

function countViews() {
  let listViews = document.querySelectorAll(".countViews"),
      viewsArray = Array.from(listViews);

  viewsArray.forEach((elem) => {
    let viewRandom = generateViewsRandom(100, 15000);

    elem.textContent = viewRandom.toString();
    if (elem.textContent.length > 4) elem.textContent = `${elem.textContent.substr(0, 2)}K`;

    renderTotalFollowers(viewRandom);
  });

  totalFollow = 0;
}

function countOverviews () {
  let countOverview = document.querySelectorAll('.countOverview')
      overViewArray = Array.from(countOverview);

  overViewArray.forEach( elem => {
    let overViewRandom = generateViewsRandom(100, 30000);

    elem.textContent = overViewRandom.toString();
    if (elem.textContent.length > 4) elem.textContent = `${elem.textContent.substr(0, 2)}K`;
  });
}

function defineTheme () {
  const localConfig = localStorage.getItem('theme');

  if(localConfig === 'dark') document.body.classList.toggle('dark-theme')
  else if(localConfig === 'light') document.body.classList.toggle('light-theme')
}

defineTheme();
setInterval(countViews, 3000);
setInterval(countOverviews, 600);

sliderBtn.addEventListener('click', () => {
  let customTheme = "";

  log(configScheme.matches);

  if(configScheme.matches) {
    document.body.classList.toggle('light-theme');
    customTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
  }
  else {
    document.body.classList.toggle('dark-theme');
    customTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
  }

  //save localstorage
  localStorage.setItem('theme', customTheme);
})