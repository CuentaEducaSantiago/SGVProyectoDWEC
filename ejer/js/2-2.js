const random = (max, min) => {
    return Math.floor(Math.random() * (max - min +1)+min)
}

console.log(start)
let mava = new Array(5).fill(0).map(()=> new Array(5).fill(0));

for (let x = 0;x<5;x++){
    for (let y = 0;y<5;y++){
        mava[x][y] = random(1,100)
    }
    console.log(mava[i])
}