
let fishing = function() {
    btnFishing.addEventListener('click', function(){
        document.querySelector('.fishField').style.display = 'flex'  // поле
        btnFishing.style.display = 'none'                   // кнопка

        function createNewPoint () {
            let fishField = document.querySelector('.fishField')
            let point = document.createElement('div')
            point.className = 'point'

            let getCoordLeft = function (){
                function getRanNum(min, max){
                    return Math.round(Math.random() * (max - min + 1)) + min
                }
                return getRanNum(0,470)
            }
            let getCoordTop = function (){
                function getRanNum(min, max){
                return Math.round(Math.random() * (max - min + 1)) + min
            }
            return getRanNum(0,470)
            }
            point.style.left = getCoordLeft() + 'px'
            point.style.top = getCoordTop() + 'px'
            fishField.appendChild(point)
        }
        
        let count = 0
        let fishTimer = document.querySelector('.fishTimer')
        // let fishTimerRes = Number(fishTimer.innerText)
        let fishTotal = document.querySelector('.fishTotal')
        let timer = setInterval(() => {
            createNewPoint ()
            count++
            if(count == 60) {
                clearInterval(timer)
                fishFinish.style.display = 'block'
                fishTotal.innerHTML = total
            }
            fishTimer.innerHTML = count
        }, 1000);
    })
    
    let total = 0
    let timerPoint = setInterval(() => {
        let clickPoint = document.querySelectorAll('.point')
        let fishCounter = document.querySelector('.fishCounter span')
        clickPoint.forEach((key) => {
            key.addEventListener('click',function(){
                console.log('click')
                total = total + 1
                fishCounter.innerHTML = total
            })
        })
    },1000)
    
}

export default fishing

// необходимо создать функцию, где -  
// 1) случаным образом в определенной зоне создается точка;
// -- получаю случайное число для координат
// -- создаю класс point
// -- присваиваю классу point значения left, top 
// -- добавляю в fishField класс point
// 2) точка = круг, который постепенно уменьшается и исчезает; 
// 6) цикл таймер по которому круги будут появляться заного
// 5) таймер который будет отсчитывать время
// 3) необходимо кликнуть по кругу чтобы получить очки; 
// 4) счетчик, который будет вести подсчёт баллов; 

// 7) сначала отсчёт 3,2,1 поехали

