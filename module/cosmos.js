let cosmos = function (){
    let getWidth = document.querySelector('.cosmos').getBoundingClientRect().width
    let width = getWidth
    let getHeight = document.querySelector('.cosmos').getBoundingClientRect().height

    let createNewStar = function cns(){
        let cosmos = document.querySelector('.cosmos')
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
        star.style.animationDelay = getRandomTB() + 'ms'
        starB.style.animationDelay = getRandomTB() + 'ms'
        starL.style.animationDelay = getRandomDelay() + 'ms'
        starR.style.animationDelay = getRandomDelay() + 'ms'
        star.style.width = getSizeStar() + 'px'
        starB.style.width = getSizeStar() + 'px'
        starR.style.width = getSizeStar() + 'px'
        starL.style.width = getSizeStar() + 'px'
        // star.style.animationDuration = getRandomDelay() + 'ms'
        console.log(getSizeStar())

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

    // for(let i = 0; i < 10; i++){
    //     let createNewStar = function cns(){
    //         let cosmos = document.querySelector('.cosmos')
    //         let starR = document.createElement('div')
    //         starR.className = 'starRight'

    //         let getRandomCoord = function (){
    //             function getRanNum(min, max){
    //                 return Math.round(Math.random() * (max - min + 1)) + min
    //             }
    //             return getRanNum(0,getHeight)
    //         }
    //         starR.style.top = getRandomCoord() + 'px'
    //         starR.style.animationDelay = getRandomDelay() + 'ms'
    //         // star.style.animationDuration = getRandomDelay() + 'ms'

    //         function getRandomDelay(){
    //             return (Math.random() * 7000)
    //         }

    //         cosmos.appendChild(starR)
    //     }
    //     createNewStar()
    // }
    // for(let i = 0; i < 10; i++){
    //     let createNewStar = function cns(){
    //         let cosmos = document.querySelector('.cosmos')
    //         let star = document.createElement('div')
    //         star.className = 'starTop'

    //         let getRandomCoord = function (){
    //             function getRanNum(min, max){
    //                 return Math.round(Math.random() * (max - min + 1)) + min
    //             }
    //             return getRanNum(0,width)
    //         }
    //         star.style.left = getRandomCoord() + 'px'
    //         star.style.animationDelay = getRandomDelay() + 'ms'
    //         // star.style.animationDuration = getRandomDelay() + 'ms'

    //         function getRandomDelay(){
    //             return (Math.random() * 10000)
    //         }

    //         cosmos.appendChild(star)
    //     }
    //     createNewStar()
    // }
    // for(let i = 0; i < 10; i++){
    //     let createNewStar = function cns(){
    //         let cosmos = document.querySelector('.cosmos')
    //         let starB = document.createElement('div')
    //         starB.className = 'starBottom'

    //         let getRandomWidth = function (){
    //             function getRanNum(min, max){
    //                 return Math.round(Math.random() * (max - min + 1)) + min
    //             }
    //             return getRanNum(0,width)
    //         }
    //         starB.style.left = getRandomWidth() + 'px'
    //         starB.style.animationDelay = getRandomDelay() + 'ms'
    //         // star.style.animationDuration = getRandomDelay() + 'ms'

    //         function getRandomDelay(){
    //             return (Math.random() * 10000)
    //         }

    //         cosmos.appendChild(starB)
    //     }
    //     createNewStar()
    // }
}

export default cosmos

//  попробовать сделать через 3д моделирование