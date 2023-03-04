// let loader = 
// setTimeout(() => {loader.remove();}, 1000);

let hist = document.referrer
console.log(hist);
options =['palette','note', 'sens', 'Fran']

if(options.some(option => hist.includes(option))){
document.querySelector('.loader').remove();
document.querySelector('.large-screen-main').style.animationDelay = "200ms"
document.querySelector('.home-page-header').style.animationDelay = "200ms"


    console.log('palette is inside!!');
}