let cosmos = function (){
    let getWidth = document.querySelector('.cosmosBack').getBoundingClientRect().width
    let width = getWidth
    let getHeight = document.querySelector('.cosmosBack').getBoundingClientRect().height

    let createNewStar = function cns(){
        let cosmos = document.querySelector('.cosmosBack')
        let starL = document.createElement('div')
        let starR = document.createElement('div')
        let starB = document.createElement('div')
        let star = document.createElement('div')
        star.className = 'starTop'
        starR.className = 'starRight'
        starL.className = 'starLeft'
        starB.className = 'starBottom'

        let getRandomCoord = function (){
            function getRanNum(min, max){
                return Math.round(Math.random() * (max - min + 1)) + min
            }
            return getRanNum(0,getHeight)
        }
        let getRandomWidth = function (){
            function getRanNum(min, max){
                return Math.round(Math.random() * (max - min + 1)) + min
            }
            return getRanNum(0,width)
        }
        star.style.left = getRandomWidth() + 'px'
        starB.style.left = getRandomWidth() + 'px'
        starL.style.top = getRandomCoord() + 'px'
        starR.style.top = getRandomCoord() + 'px'
        starR.style.filter = blur('150px')

        star.style.animationDelay = getRandomTB() + 'ms'
        starB.style.animationDelay = getRandomTB() + 'ms'
        starL.style.animationDelay = getRandomDelay() + 'ms'
        starR.style.animationDelay = getRandomDelay() + 'ms'
        star.style.width = getSizeStar() + 'px'
        starB.style.width = getSizeStar() + 'px'
        starR.style.width = getSizeStar() + 'px'
        starL.style.width = getSizeStar() + 'px'
        // star.style.animationDuration = getRandomDelay() + 'ms'

        function getSizeStar(){
            function getRanNum(min, max){
                return (Math.round(Math.random() * (max - min + 1)) + min)
            }
            return getRanNum(1,3)
        }
        function getRandomDelay(){
            return (Math.random() * 8500)
        }
        function getRandomTB(){
            return (Math.random() * 12000)
        }
        cosmos.appendChild(star)
        cosmos.appendChild(starB)
        cosmos.appendChild(starR)
        cosmos.appendChild(starL)
    }
    for(let i = 0; i < 10; i++){
        createNewStar()
    }

}

export default cosmos

//  попробовать сделать через 3д моделирование
// img src = https://source.unsplash.com/random/200x200


/* <html>
    <body onload="draw();">
        <canvas id="canvas" width="100" height="100"></canvas>
    </body>
</html> */

// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext){
//       var ctx = canvas.getContext('2d');
  
//       ctx.beginPath();
//       ctx.moveTo(75,50);
//       ctx.lineTo(100,75);
//       ctx.lineTo(100,25);
//       ctx.fill();
//     }
//   }