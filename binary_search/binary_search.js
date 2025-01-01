function binary_search(value,target){
    
    let start = 0;
    let end = value.length -1
  
    while(start <= end){
        let middle = Math.round((start + end) / 2);
        if(value[middle] === target){
            return middle;
        }else if (value[middle] < target){
            start = middle +1
        }else{
            end = middle -1
        }
    }

    return -1;
}

const value = [2,3,5,6,8,10,16,24]
const target = 10;
console.log(binary_search(value,target))