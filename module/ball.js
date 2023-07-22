let ball = function(){
  
  ballCreate()

  document.querySelector('#pinkBall').addEventListener('click',function(){
    anime({
      targets: '.ball',
      keyframes: [
        {translateY: 250, easing: 'easeInCubic'},
        {translateY: 0, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCubic'},
        {translateY: 30, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCubic'},
        {translateY: 60, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCubic'},
        {translateY: 90, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCubic'},
        {translateY: 120, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCirc'},
        {translateY: 155, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCirc'},
        {translateY: 170, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCirc'},
        {translateY: 185, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCirc'},
        {translateY: 200, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCirc'},
        {translateY: 220, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCirc'},
        {translateY: 230, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCirc'},
        {translateY: 240, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCirc'},
        {translateY: 245, easing: 'easeOutQuart'},
        {translateY: 250, easing: 'easeInCirc'},
      ],
      duration: 5000,
      loop:false,
      direction: 'alternate',
    })
  })
            // создание объекта
  function ballCreate(){
    let field = document.querySelector('.ballField')
    let ball = document.createElement('div')
    ball.className = 'ball'
    ball.style.borderRadius = '50%'
    ball.style.backgroundColor = 'gray'
    ball.style.width = '40px'
    ball.style.height = '40px'
    ball.style.position = 'absolute'
    field.appendChild(ball)
  }
  // createMove()

}



      // движение
// let createMove = function (){
//   let ballFieldBottom = document.querySelector('.ballField').getBoundingClientRect().height
//   let step = 5
//   let i = 0

//   let startTimer = function(){
//     let ball = document.querySelector('.ball')
//     let bottom = ball.offsetTop

//     if(i < (ballFieldBottom/step) ) {
//       ball.style.top = bottom + step + 'px'
      
//     }
//     else {clearInterval(ballTimer)}
//     i++
//   }

//   let ballTimer = setInterval(() => {
//     startTimer()
//   }, 10);
// }




export default ball

// поработать с массивами push, slice, map, splice