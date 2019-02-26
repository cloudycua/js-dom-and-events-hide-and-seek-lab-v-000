function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list = document.querySelector('.ranked-list')

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (list[i].innerHTML + n).toString();
  }
}
