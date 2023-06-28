let snowAndCosmicMode = function (){
    let getWidth = document.querySelector('.snowMain').getBoundingClientRect().width
    let width = getWidth - 10

    for(let i = 1; i < 200; i++){
        let cns = function createNewSnow () {
            let snowField = document.querySelector('.snowMain')
            let el = document.createElement('div')
            el.className = 'snowPoint'

            let getRandomCoord = function (){
                function getRanNum(min, max){
                    return Math.round(Math.random() * (max - min + 1)) + min
                }
                return getRanNum(0,width)
            }
            el.style.left = getRandomCoord() + 'px'
            el.style.animationDelay = snowDelay() + 'ms'
            el.style.width = snowSize() + 'px'
            el.style.height = snowSize() + 'px'
            el.style.animationDuration = snowDuration() + 's'
            function snowDelay (){
                return Math.random() * 4000
            }
            function snowSize() {
                return Math.floor(Math.random() * 10)
            }
            function snowDuration(){
                return Math.floor(Math.random() * 10)
            }

            snowField.appendChild(el)
        }
        cns()
    }


}

export default snowAndCosmicMode



// идёт снег, вертикально с небольшим искажением или ускорением
// -- получаю ширину экрана клиента
// -- создаю случайную точку
// -- размещаю точку по полученной ширине, где по оси Y будет 0
// -- создаю цикл, где задаю определенное кол-во точек
// -- снежинки начинают свой путь со случайной задержкой(в цикле?)
// -- разный размер снежинок

// -- цикл случайного появления колличества снежинок

// -- снежинки начинают свой путь со случайной продолжительностью(в цикле?)
// -- для точки задаётся анимация спускается вниз по оси Y и заворачивает 