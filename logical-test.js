function changetNumberToText(){
    // let data = 50
    let result = '';
    let results = [];

    for(let i = 1; i<=50; i++){
        if(i%15==0){
            result='Frontend Backend'
        }else if(i%3==0){
            result='Frontend'
        }else if(i%5==0){
            result='Backend'
        }else{
            result = i
        }
        results.push(result)
    }
    console.log(results)
}

console.log(changetNumberToText())