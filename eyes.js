// use the html ball, which are the black are of the eye.
const balls = document.getElementsByClassName('ball');
// this function allows you to use the mouse, and make it seek for the mouse cursor.
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
