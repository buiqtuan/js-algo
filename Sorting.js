function bubbleSort(arr = []) {
    for (let i=0;i<arr.length-1;i++) {
        for (let j=i+1;j<arr.length;j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

function selectionSort(arr =[]) {
    for (let i=0;i<arr.length-1;i++) {
        let indice = i;
        for (let j=i+1;j<arr.length;j++) {
            if (arr[j] < arr[indice]) {
                indice = j;
            }
        }
        if (indice !== i) {
            let temp = arr[i];
            arr[i] = arr[indice];
            arr[indice] = temp;
        }
    }

    return arr;
}

function mergeSort(arr = []) {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left = [], right = []) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift(0));
        } else {
            result.push(right.shift(0));
        }
    }

    return [...result,...left,...right];
}

console.log(mergeSort([3,1,-2,4,3,7,11,5,6]));