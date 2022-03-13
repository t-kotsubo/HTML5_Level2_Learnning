window.onload = function () {
  const target = document.getElementById('main').firstElementChild;

  // const text = target.innerText;
  // target.innerText = 'タイトルが変更されました！'
  target.parentNode.removeChild(target);
  // console.log(text);

};