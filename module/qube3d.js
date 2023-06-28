let qube3d = function(){

    for(let x = 0; x < 100; x++){
        let createNewPoint = function cnp(){
            let field = document.querySelector('.sides')
            let point = document.createElement('div')
            let point2 = document.createElement('div')
            point.className = 'qubePoint'
            point2.className = 'qubePoint2'

            let aaa = function getRandomCoord(){
                function getRanNum(min, max){
                    return Math.round(Math.random() * (max - min + 1)) + min
                }
                return getRanNum(0,28)
            }
            let posX = aaa() * 10 + 'px'
            let posY = aaa() * 10 + 'px'
            // console.log(posX, posY)

            function getRandomDelay(){
                return (Math.random() * 8500)
            }
            point.style.transform = `translate3d(${posX},${posY},150px)`
            point.style.animationDelay = getRandomDelay() + 'ms'

            field.appendChild(point)
        }
        createNewPoint()
    } 
}

export default qube3d
