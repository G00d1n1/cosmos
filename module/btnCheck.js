
 let btnCheck = function(){
    let btnCheck = document.querySelectorAll('#btnCheck')
    for (let btn of btnCheck) {
        btn.addEventListener('click', function (){
            let parentBtn = btn.parentElement
            let span = +parentBtn.querySelector('span').innerHTML
            // btn.style.display = 'none'

            let result = parentBtn.querySelector('#result').value

            let answer = parentBtn.querySelector('.answer')
            let fail = parentBtn.querySelector('.fail')

            if (result != span){
                answer.classList.remove('show')
                fail.classList.add('show')
            }
            else {
                answer.classList.add('show')
                fail.classList.remove('show')
                btn.style.visibility = "hidden"
            }
        })
    }
}


export default btnCheck


// let form = document.forms.my
// let elem = form.elements.one
// console.log(elem.value)

// повесить событие на кнопку которая будет определять решение
