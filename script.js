//BASIC PROMISES

const BASE_URL = "https://pokiapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`

fetch(url, { mode: 'no-cors' })
.then(function(data){
    console.log(data)
})

//PROMISE CHAINING

fetch(`${BASE_URL}/1`, { mode: 'no-cors' })
    .then((res1) => {
        console.log('response 1', res1)
        return fetch(`${BASE_URL}/2`, { mode: 'no-cors' })
    })
    .then((res2) => {
        console.log('response 2', res2)
        return fetch(`${BASE_URL}/3`, { mode: 'no-cors' })
    })
    .then((res3) => {
        console.log('response 3', res3)
        return fetch(`${BASE_URL}/4`, { mode: 'no-cors' })
    })
    .then((res4) => {
        console.log('response 4', res4)
    })
    .catch((err) => {
        console.log('Error!:', err)
    })


// ASYNC/ AWAIT

async function getFirstPoke() {
    const result = await fetch (`${BASE_URL}/2`, { mode: 'no-cors' })
    console.log(result)
}

//ERROR HANDLING

async function getPokeMon() {
    try {
        const res1 =  await fetch(`${BASE_URL}/1`, { mode: 'no-cors' })
        console.log(res1)
    } catch(e){
        console.log(e)
    }
}


//MANY CALLS WITH promise.all()
const lotsOfFetchCalls = [
    fetch(`${BASE_URL}/1`, { mode: 'no-cors' }),
    fetch(`${BASE_URL}/2`, { mode: 'no-cors' }),
    fetch(`${BASE_URL}/3`, { mode: 'no-cors' }),
    fetch(`${BASE_URL}/4`, { mode: 'no-cors' })
]

Promise.all(lotsOfFetchCalls)
.then((results) => {
    console.log('function executed', results)
})
.catch((e) => {
    console.log('error!', e)
})


async function getAllPoke() {
    try {
        const results = await Promise.all(lotsOfFetchCalls);

        console.log('function executed', results)
} catch (e) {
        console.log('error!', e)
    }
}

//BUILDING OUR OWN PROMISES

function wait(duration) {
    const p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('this is the resolved value!')
        }, duration)
    });
    return p;
}

wait(5000).then(val => console.log(val))