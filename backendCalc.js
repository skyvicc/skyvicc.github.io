function proc(butt){
    input.value += butt.value
    input.style.color = `rgb(14, 100, 170)`
}
function resulting(){
    try{
        input.value = eval(input.value)
        input.style.color = 'red'
    } catch(err){
        alert('Please use valid mathimatical operations')
        input.value = ''
    }
}
function flooring(){
    input.value = ''
}

function deleting(){
    input.value = input.value
    // console.log(String(input.value).slice(input.value.length -1, input.value.length))
    input.value =String(input.value).slice(0, input.value.length-1)
    input.style.color = `rgb(14, 100, 170)`
}

const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')

const lpar = document.getElementById('lpar')
const rpar = document.getElementById('rpar')
const div = document.getElementById('div')
const del = document.getElementById('del')
const mult= document.getElementById('mult')
const minus= document.getElementById('minus')
const plus = document.getElementById('plus')
const point = document.getElementById('point')
const ce= document.getElementById('ce')
const equal = document.getElementById('equal')
const input = document.querySelector('#in')

lpar.addEventListener('click',()=> proc(lpar))
rpar.addEventListener('click',()=> proc(rpar))
div.addEventListener('click',()=> proc(div))
del.addEventListener('click',()=> deleting())
mult.addEventListener('click',()=> proc(mult))
minus.addEventListener('click',()=> proc(minus))
plus.addEventListener('click',()=> proc(plus))
point.addEventListener('click',()=> proc(point))
ce.addEventListener('click',()=> flooring())
equal.addEventListener('click',()=> resulting())

one.addEventListener('click',()=> proc(one))
two.addEventListener('click', ()=>proc(two))
three.addEventListener('click', ()=>proc(three))
four.addEventListener('click', ()=>proc(four))
five.addEventListener('click', ()=>proc(five))
six.addEventListener('click', ()=>proc(six))
seven.addEventListener('click', ()=>proc(seven))
eight.addEventListener('click', ()=>proc(eight))
nine.addEventListener('click', ()=>proc(nine))
zero.addEventListener('click', ()=>proc(zero))
input.addEventListener('keydown', function(press){if (press.keyCode === 13){ resulting()}})