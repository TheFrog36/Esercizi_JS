
//1) Ciclo for che parta da 0 e vada a 100. A ogni giro stampare il valore di 'i' 
//   e stampare fizz se 'i' è divisibile per 3, buzz se è per 5 e fizzbuzz
//   e fizzbuzz se è divisibile per entrambi

for(let i = 1; i <= 100; i++){
    let txt = "";
    if(i % 3 === 0) txt +="fizz";
    if(i % 5 === 0) txt +="buzz";
    console.log(i, txt);
}

//2) Creare un programma che stampi a console questa scacchiera:
//   # # # # 
//    # # # # 
//   # # # # 
//    # # # # 
//   # # # # 
//    # # # # 
//   # # # # 
//    # # # # 

for(let i = 0; i < 8; i++){
    let txt = '';
    for(let j = 0; j < 8; j++){
        if((j % 2 === 0 && i % 2 ===0) || (j % 2 !== 0 && i % 2 !==0 )){
            txt += "#";
        } else {
            txt +=" "
        }
    }
    console.log(txt);
}

//3) Creare questa scacchiera in console
// #
// ##
// ###
// ####
// #####
// ######

let lines_number = 9
for(let i = 0; i <= lines_number; i++){
    let txt = '';
    for(let j = 0; j < i; j++){
        txt += '#';
    }
    console.log(txt);
}

//4) Creare questa scacchiera in console
//    #
//   ###
//  #####
// #######
//#########

let n_lines = 10;
for(let i = 1; i <= n_lines; i++){
    let txt = '';
    for(let j = 0; j < n_lines - i; j++){
        txt += ' ';
    }
    for(let k = 0; k < i * 2 -1; k++){
        txt += '#';
    }
    console.log(txt);
}
