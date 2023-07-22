function cosmos3d (){

  for(let i = 0; i < 100; i++){
    let createNewPoint = function createStar(){
      let field = document.querySelector('.cosmos3dBack')
      let point = document.createElement('div')
      point.className = 'qubePoint2'

      let aaa = function getRandomCoord(){
        function getRanNum(min, max){
            return Math.round(Math.random() * (max - min + 1)) + min
        }
        return getRanNum(0,28)
      }
      let posX = aaa() * 10 + 'px'
      let posY = aaa() * 10 + 'px'

      function getRandomDelay(){
        return (Math.random() * 8500)
      }
      // point.style.transform = `translate3d(${posX},${posY},-150px)`
      // point.style.animationDelay = getRandomDelay() + 'ms'

      // startAnimation()
      // let timeAnimation = setInterval(() => {
      //   finishAnimation()
      // }, 0);
      // function startAnimation(){
      //   point.style.transform = 'translate3d(150px,150px,150px)'
      //   point.style.transition = 'transform 3s linear '
      // }
      // function finishAnimation(){
      //   point.style.transform = `translate3d(${posX},${posY},-150px)`
      // }

      let zzz = getRandomDelay()
      // let qqq = point.animate([
      //   {transform: 'translate3d(150px, 150px, 150px)'},
      //   {transform: `translate3d(${posX},${posY},-150px)`}
      // ], zzz);
      
      
      // qqq.addEventListener('finish', function() {
      //     point.style.transform = 'translate3d(150px, 150px, 150px)';
      //   });
      
      
  
      field.appendChild(point)
    }
    createNewPoint()
  }
}



export default cosmos3d

      //интересный способ, но работает разом
// let timerId = setTimeout(function tick(){
//   let qqq = point.animate([
//     {transform: 'translate3d(150px, 150px, 150px)'},
//     {transform: `translate3d(${posX},${posY},-150px)`}
//   ], zzz);
//   timerId = setTimeout(tick,3000)
// }, 1000);

      // подсмотрено
// var boxElement = document.querySelector('.box');
// var animation = boxElement.animate([
//   {transform: 'translate(0)'},
//   {transform: 'translate(150px, 200px)'}
// ], 500);
// останавливает анимацию
// animation.addEventListener('finish', function() {
//   boxElement.style.transform = 'translate(150px, 200px)';
// });