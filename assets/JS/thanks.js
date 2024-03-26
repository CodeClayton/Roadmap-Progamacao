const time = document.getElementById('time');
let counter = 5;

if(counter <= 5){
    setTimeout(() => {
        window.location.href = "../../index.html";
        // faz como um ancor mas sem precisar clicar.
    }, 5000);

    const interval = setInterval(() => {
        counter--;
        time.innerHTML = counter;
        if(counter === 0){
            clearInterval(interval);
        }
    },1000);
}


