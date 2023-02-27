const check = document.querySelector('.checkButton01')
const continue01 = document.querySelector('.continueButton01')
const continue02 = document.querySelector('.continueButton02')

let i_array = [
    document.querySelector('.i'), 
    document.querySelector('.ii'),
    document.querySelector('.iii'),
    document.querySelector('.iv'),
    document.querySelector('.v'),
    document.querySelector('.vi'),
    document.querySelector('.vii'),
    document.querySelector('.viii'),
    document.querySelector('.ix'),
    document.querySelector('.x'),

    document.querySelector('.i_01'), 
    document.querySelector('.ii_01'),
    document.querySelector('.iii_01'),
    document.querySelector('.iv_01'),
    document.querySelector('.v_01'),
    document.querySelector('.vi_01'),
    document.querySelector('.vii_01'),
    document.querySelector('.viii_01'),
    document.querySelector('.ix_01'),
    document.querySelector('.x_01'),

    document.querySelector('.i_02'), 
    document.querySelector('.ii_02'),
    document.querySelector('.iii_02'),
    document.querySelector('.iv_02'),
    document.querySelector('.v_02'),
    document.querySelector('.vi_02'),
    document.querySelector('.vii_02'),
    document.querySelector('.viii_02'),
    document.querySelector('.ix_02'),
    document.querySelector('.x_02'),

    document.querySelector('.i_03'), 
    document.querySelector('.ii_03'),
    document.querySelector('.iii_03'),
    document.querySelector('.iv_03'),
    document.querySelector('.v_03'),
    document.querySelector('.vi_03'),
    document.querySelector('.vii_03'),
    document.querySelector('.viii_03'),
    document.querySelector('.ix_03'),
    document.querySelector('.x_03')
]


let input_array  = [
    document.querySelector('.iIn'), 
    document.querySelector('.iiIn'),
    document.querySelector('.iiiIn'),
    document.querySelector('.ivIn'),
    document.querySelector('.vIn'),
    document.querySelector('.viIn'),
    document.querySelector('.viiIn'),
    document.querySelector('.viiiIn'),
    document.querySelector('.ixIn'),
    document.querySelector('.xIn'),

    document.querySelector('.iIn_01'), 
    document.querySelector('.iiIn_01'),
    document.querySelector('.iiiIn_01'),
    document.querySelector('.ivIn_01'),
    document.querySelector('.vIn_01'),
    document.querySelector('.viIn_01'),
    document.querySelector('.viiIn_01'),
    document.querySelector('.viiiIn_01'),
    document.querySelector('.ixIn_01'),
    document.querySelector('.xIn_01'),

    document.querySelector('.iIn_02'), 
    document.querySelector('.iiIn_02'),
    document.querySelector('.iiiIn_02'),
    document.querySelector('.ivIn_02'),
    document.querySelector('.vIn_02'),
    document.querySelector('.viIn_02'),
    document.querySelector('.viiIn_02'),
    document.querySelector('.viiiIn_02'),
    document.querySelector('.ixIn_02'),
    document.querySelector('.xIn_02'),

    document.querySelector('.iIn_03'), 
    document.querySelector('.iiIn_03'),
    document.querySelector('.iiiIn_03'),
    document.querySelector('.ivIn_03'),
    document.querySelector('.vIn_03'),
    document.querySelector('.viIn_03'),
    document.querySelector('.viiIn_03'),
    document.querySelector('.viiiIn_03'),
    document.querySelector('.ixIn_03'),
    document.querySelector('.xIn_03')
]



const coloring = function(place){
    place.style.color= 'rgb(73, 138, 162)'
}
const evaluation = function(x, y){
    if(eval(x.textContent) == y.value){
        y.style.color = '#0EFF2E'
    }else{
        y.style.color = 'red'
    }
    y.addEventListener('click', ()=>coloring(y))
}

check.addEventListener('click', ()=>{
    for(let i=0;i<=i_array.length; i++ ){
        evaluation(i_array[i], input_array[i])
    }
})