// //SET TIME OUT - asincronico

// setTimeout ( () => {
//     console.log("proceso asincronico");
// }, 3000)

// // Los procesos asincronicos se ejecutan desp de los procesos sincronico 

// console.log("Inicio");

// setTimeout ( () => {
//     console.log("proceso asincronico");
// }, 3000)

// console.log("Fin");

// //SETINTERVAL 

// setInterval ( () => {
//         console.log("tic");
//     }, 1000)

// setInterval ( () => {
//     console.log(new Date().toLocaleTimeString);
// }, 1000)


// let counter = 0

// const interval = setInterval ( () => {
//     counter++
//     console.log("Counter ", counter)

//     if (counter >= 5) {
//         clearInterval(interval)
//         console.log("Se removio el intervalo");
//     }
// }, 1000);

// //clear timeout

// console.log("Inicio");

// const fin = setTimeout ( () => {
//     console.log("fin");
// }, 3000)

// clearTimeout(fin);


// //PROMESAS 

// const eventoFuturo = (res) => {
//     return new Promise( (resolve, reject) => {
//         if(res === true) {
//             resolve('Promesa resulta')
//         } else {
//             reject('Promesa rechazada')
//         }
//     })
// }

// console.log(eventoFuturo(true));

const data = [{nombre: 'camila', edad: 14 }];



const getData = () => {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            return data;
        }, 2000)
    })
}

getData().then((data) => console.log(data));
