const gfttr = function gameFlyToTheRight(){
  let gameFlying = document.querySelector('.gameFlying')
  let ship = document.querySelector('#cosmoShip')
  let step = 100
  // let fieldWidth = gameFlying.getBoundingClientRect().width
  // let fieldHeight = gameFlying.getBoundingClientRect().height
  let arrImages = ['img/wall/comet.png','img/wall/meteor.png','img/wall/satelite.png','img/wall/ufo.png']

  let getRandomCoord = function (){
    function getRanNum(min, max){
        return Math.round(Math.random() * (max - min)) + min
    }
    return getRanNum(0, 7)
  }
  function getRandomImage(){
    function getRanNum(min, max){
        return (Math.round(Math.random() * (max - min)) + min)
    }
    return getRanNum(0,3)
  }

      // создание препятствия на поле
  let createWall = function cWall(){
    let randomImg = arrImages[getRandomImage()]
    let iii = document.createElement('img')
    iii.className = 'meteor'
    iii.setAttribute('src' , randomImg)
    iii.style.top = getRandomCoord() * 100 + 'px'
    gameFlying.appendChild(iii)
    anime({
      targets: iii,
      left: -100,
      duration: 1000,
      easing: 'easeInSine'
    })
  } 
      // элемент создается через определенный отрезок времени
  let timerIdAdd = setTimeout(function tick(){
    createWall()
    let arrObj = document.querySelectorAll('.meteor')
    for(let obj of arrObj){
      let aaa = parseInt(obj.style.left)
      if(aaa == -100){obj.remove()}
    }
    timerIdAdd = setTimeout(tick, 1000)
  }, 1);

        // управление кораблем
  document.addEventListener('keydown', function (e){
    if(e.keyCode == '87' || e.keyCode == '38'){moveDown()}
    if(e.keyCode == '83' || e.keyCode == '40'){moveUp()}
  })
  function moveUp(){
    let top = parseInt(window.getComputedStyle(ship).getPropertyValue("top"));
    top += step;
    if(top<800){
        ship.style.top = top + "px";
  }}
  function moveDown(){
    let top = parseInt(window.getComputedStyle(ship).getPropertyValue("top"));
    top -= step ;
    if(top>=0){
        ship.style.top = top + "px";
  }}


  //////////////////////////////////
  // function getCoords(gameFlying){
  //   let aaa = gameFlying.getBoundingClientRect()
  //   return {
  //     top: box.top + window.pageYOffset,
  //     right: box.right + window.pageXOffset,
  //     bottom: box.bottom + window.pageYOffset,
  //     left: box.left + window.pageXOffset
  //   }
  // }

  
       // получаю позицию судна и препятствий(нужно онлайн)
  let sss = setInterval((e) => {
    function gpvwl(){
      let wall = document.querySelector('.meteor')
      let getPositionValueWallTop = parseInt(window.getComputedStyle(wall).getPropertyValue('left'))
      return getPositionValueWallTop
    }
    function gpvs(){
      let getPositionValueShip = parseInt(window.getComputedStyle(ship).getPropertyValue('top'))
      return getPositionValueShip
    }
    function gpvwt(){
      let wall = document.querySelector('.meteor')
      let getPositionValueWallTop = parseInt(window.getComputedStyle(wall).getPropertyValue('top'))
      return getPositionValueWallTop
    }
    // console.log(gpvs())
    // console.log(gpvwt())
    // console.log(gpvwl())
    // gpvs()
    // gpvwt()
    if(100 > gpvwl() && gpvwt() == gpvs()){
      alert("Игра окончена!")
      clearInterval(sss)
    }    
  }, 10);






} // /gfttr

export default gfttr







/*
        Идея
***полет сквозь космос вправо с препятствиями***

если по оси У, корабль = метеор или 

-- условия поражения
-- подсчет очков

-- задний фон  эффект пролета под городами(длинное изображение)

mousemove – при движении мыши.
*/

