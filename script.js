//question : Display countdown from 10 to 1 on the screen and then display Happy Independence Day on the screen.


//Solution:
//getting count using query selector from html and intializing timer from 10
const count = document.querySelector('.count');
let time = 10;
// starting Callback hell and using seTimeOut method to give 1 sec delay 
//logic
count.innerText = time--;
setTimeout(() => {
    count.innerText = time--;
    setTimeout(() => {
        count.innerText = time--;
        setTimeout(() => {
            count.innerText = time--;
            setTimeout(() => {
                count.innerText = time--;
                setTimeout(() => {
                    count.innerText = time--;
                    setTimeout(() => {
                        count.innerText = time--;
                        setTimeout(() => {
                            count.innerText = time--;
                            setTimeout(() => {
                                count.innerText = time--;
                                setTimeout(() => {
                                    count.innerText = time--;
                                    setTimeout(() => {
                                        count.innerText = 'Happy Independence Day!'
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);