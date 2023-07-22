let matrix = function(){
  let fullGetWidth = document.querySelector('.matrix').getBoundingClientRect().width
  let getWidth = fullGetWidth - 12
  let fullGetHeight = document.querySelector('.matrix').getBoundingClientRect().height
  let getHeight = fullGetHeight + 20
  let fontSize = 12
  let y = 0
  let char
  let chars
  let field = document.querySelector('.matrix')

          // создание и добавление нового элемента
  function createNewChar(){
    char = document.createElement('div')
    char.className = 'mChar'
    char.innerHTML = randomNum()
    char.style.font = `bold ${fontSize}px monospace `
    field.appendChild(char)
  }  
          // генерация 0 или 1
  function randomNum(){
    let randomNums = Math.round(Math.random())
    return randomNums
  }
          // расположение в случайной точке по оси Х
  let getRandomCoord = function (){
    function getRanNum(min, max){
        return Math.round(Math.random() * (max - min + 1)) + min
    }
    return getRanNum(0,getWidth)
  }

          // создание нового элемента
  // setInterval(() => {
  //   createNewChar()
  //   char.style.left = getRandomCoord() + 'px'
  // },100);

          // удаление элементов
  setInterval(() => {
    chars = document.querySelectorAll('.mChar')
    chars.forEach(element => {
      let getDistTop = element.getBoundingClientRect().top
      if (getDistTop > getHeight){element.remove()}
    });
  }, 10);





        // каждую долю секунды движение вниз
  // chars = document.querySelectorAll('.mChar')
  // chars.forEach(element => {
  //   // let start = Date.now()
    // let timerSet = setInterval(function tick(){
    //   let timePassed = Date.now() - start
    //   // moveElement()
    //   element.style.top = timePassed / 5 + 'px'
    //   if(timePassed > 4000) clearInterval(timerSet) 
    //   console.log(element)

    // },100)
  //   element.style.color = 'red'
  // });

        // как удалять элементы?

  // chars.forEach(element => {
  //   let timerSet = setInterval(function tick(){
  //     element.remove()
  //     console.log('jj')
  //   },2000)
  // });

 


 

        // движение по вертикальной оси
  // chars = document.querySelectorAll('.mChar')
  // chars.forEach(element => {
  //   let timerId = setInterval(function tick(){
  //     if(y < getHeight){animationBottom()}
  //       // по достижению координат, удаляю
  //     else {element.remove()}
  //     timerId = setTimeout(tick, 1000)
  //   }, 10);
  //   function animationBottom(){
  //     y = 12
  //     element.style.top = y + 'px'
  //   }
  // });

 // let testTimer =  Math.round(Math.random() * 100)
  // for(let i = 0; i < 10; i++){
  // createNewChar()
  // }


  // let qqq = newArr.join('')
  // field.insertAdjacentText('beforeend', qqq)

  // let timerId = setInterval(function tick(){
  //     animationBottom()
  //   timerId = setTimeout(tick,1000)
  // },100);
}


export default matrix




// одна функция создает элемент
// вторая функция размещает элемент
// третья функция задает анимацию
// четвертая удаляет элемент

// каждая секунда генерирует функцию создания символа, 
// где у символ создается в поле по ширине, 
// его задача следовать от top0 к bottom800 по оси Y,
// после достижения максимального Y, удалить элемент

// при движении по оси Y, копировать предыдущий элемент