let numbers = [];
let steps = 0;

function displayNumbers(){
    document.getElementById("output").textContent = numbers;
}

function displaySteps(){
    let paragraph = document.getElementById("steps");
    paragraph.textContent = "Steps: " + steps;
    paragraph.style.visibility = "visible";
}

function generateNumbers(){
    for (let i = 0; i < 1000; i++){
        numbers[i] = Math.trunc(Math.random() * 10000);
    }
    displayNumbers();
}

function sortBy(){
    return document.getElementById("sortBy").value == "ascending";
}

function sort(){
    steps = 0;

    switch (document.getElementById("sortingAlgorithm").value){
        case "bubbleSort": bubbleSort();
        break;

        case "insertionSort": insertionSort();
        break;

        case "selectionSort": selectionSort();
        break;

        case "quickSort": quickSort();
        break;
    }

    displaySteps();
    displayNumbers();
}

function compare(number1, number2, standardComparison = sortBy()){
    if (standardComparison){
        return number1 > number2;
    }
    else{
        return number1 < number2;
    }
}

function bubbleSort(){
    let sorted = false;

    while (!sorted){
        sorted = true;

        for (let i = 0; i < numbers.length - 1; i++)
            if (compare(numbers[i], numbers[i + 1])){
                let number = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = number;

                sorted = false;
                steps++;
            }
    }
}

function insertionSort(){
    let currentNumber, j;

    for (let i = 1; i < numbers.length; i++)
    {
        currentNumber = numbers[i];
        j = i - 1;

        while (j >= 0 && compare(numbers[j], currentNumber))
        {
            numbers[j + 1] = numbers[j];
            j--;

            steps++;
        }

        steps++;
        numbers[j + 1] = currentNumber;
    }
}

function selectionSort(){
    let minValueIndex;

    for (let i = 0; i < numbers.length; i++){
        minValueIndex = i;

        for (let j = i + 1; j < numbers.length; j++) {
            if (compare(numbers[j], numbers[minValueIndex], !sortBy()))
                minValueIndex = j;

            steps++;
        }

        let temp = numbers[i];
        numbers[i] = numbers[minValueIndex];
        numbers[minValueIndex] = temp;
    }
}

function partition(low, high){
    let pivot = numbers[high];

    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (compare(numbers[j], pivot, !sortBy())) {
            i++;
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;

            steps++;
        }
    }
    let temp = numbers[i + 1];
    numbers[i + 1] = numbers[high];
    numbers[high] = temp;

    steps++;

    return i + 1;
}

function quickSort(low = 0, high = numbers.length - 1){

    if (low < high){
        let pivot = partition(low, high);

        quickSort(low, pivot - 1);
        quickSort(pivot + 1, high);
    }
}