function changetNumberToText(){
    let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
    let result = [];

    for(let i = 0; i<data.length; i++){
        if(data[i]%3 == 0){
            data[i] = 'Frontend';
        }
        if(data[i]%5 == 0){
            data[i] = 'Backend';
        }
        if(data[i]%15 == 0){
            data[i] == 'Frontend Backend';
        }
        console.log(data[i]);
        // result = data[i];
        result.push(data[i]);
    }
    console.log(result);
}

console.log(changetNumberToText())