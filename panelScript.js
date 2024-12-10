const btnFox = document.querySelector('.btn-fox')
const btnBoar = document.querySelector('.btn-boar')
const btnDear = document.querySelector('.btn-dear')
const btnBear = document.querySelector('.btn-bear')
const btnSquirrel = document.querySelector('.btn-squirrel')
const btnFrog = document.querySelector('.btn-frog')
const btnSnake = document.querySelector('.btn-snake')
const btnWorm = document.querySelector('.btn-worm')

const infoWindow = document.querySelector('.info-window')



function execute(title, text, image1, image2, image3){
    infoWindow.innerHTML = `
        <button class="info-window-close-btn">close</button>
        <h1>${title}</h1>
        <p>${text}</p>
        <div class="window-images">
        <img src="images/${image1}.jpg" alt="">
        <img src="images/${image2}.jpg" alt="">
        <img src="images/${image3}.jpg" alt="">
        </div>
`


    infoWindow.style.display = 'block'

    document.querySelector('.info-window-close-btn').addEventListener('click', ()=>{
        infoWindow.style.display = 'none'
    })
}
// [...]

btnFox.addEventListener('click', ()=>{
    execute('ΑΛΕΠΟΥ', 
            'Οι αλεπούδες τρώνε μικρά ζώα τα οποία μεταφέρουν ασθένειες, και τρώγοντας φρούτα και φυτά, βοηθουν στον επικονιασμό',
            'foxImg01', 'foxImg02', 'foxImg03')

})

btnBoar.addEventListener('click', ()=>{
    execute('ΑΓΡΙΟΓΟΥΡΟΥΝΟ',
    'Τα αγριογούρουνα σκαβουν επιτρέποντας να ανατέβεται το χώμα, ου βοηθάει στην ανάπτυξη των φυτών',
    'boarImg01','boarImg02','boarImg03')
})

btnDear.addEventListener('click', ()=>{
    execute('ΕΛΑΦΙ',
    'Τα ελαφάκια βοηθούν στην επικονίαση καθώς τρώνε βλάστηση',
    'dearImg01', 'dearImg02', 'dearImg03')
})

btnBear.addEventListener('click',()=>{
    execute('ΑΡΚΟΥΔΑ', 
    'Οι αρκούδες ελέγχουν τον πληθυσμό των ψαριών καιβοηθούν στον επικονιασμό και την ανάδευση του εδάφους',
    'bearImg01', 'bearImg02', 'bearImg03')
})

btnSquirrel.addEventListener('click', ()=>{
    execute('ΣΚΙΟΥΡΟΣ', 
    'Σκίουροι, οι κρυφοί δενδροφυτευτές!', 'squirrelImg01', 'squirrelImg02', 'squirrelImg03')
})

btnFrog.addEventListener('click', ()=>{
    execute('ΒΑΤΡΑΧΑΚΙΑ', 'Τα βατραχάκια ελέγχουν των πληθυσμό των εντόμων και μας προστατεύουν από ασθένειες.',
    'frogImg01', 'frogImg02', 'frogImg03')
})

btnSnake.addEventListener('click', ()=>{
    execute('ΦΙΔΙΑ', 'Κάποια φίδια μας προσφέρουν το δηλητήριό τους για τη δηιουργία φαρμάκων.',
    'snakeImg01', 'snakeImg02', 'snakeImg03'
    )
})

btnWorm.addEventListener('click', ()=>{
    execute('ΣΚΟΥΛΙΚΙΑ',
    'Τα σκουλικάκια μας βοηθούν στη γεωργία με την προστασία του εδάφους', 
    'wormImg01', 'wormImg02', 'wormImg03')
})