let numbers = [];

function displayNumbers(){
    document.getElementById("output").textContent = numbers;
}

function displaySteps(steps){
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
    switch (document.getElementById("sortingAlgorithm").value){
        case "bubbleSort": displaySteps(bubbleSort());
        break;

        case "insertionSort": displaySteps(insertionSort());
        break;

        case "selectionSort": displaySteps(selectionSort());
        break;

        case "quickSort": displaySteps(quickSort());
        break;
    }

    displayNumbers();
}

function bubbleSort(){
    let sorted = false;
    let steps = 0;

    if (sortBy()){
        while (!sorted){
            sorted = true;

            for (let i = 0; i < numbers.length - 1; i++)
                if (numbers[i] > numbers[i + 1]){
                    let number = numbers[i];
                    numbers[i] = numbers[i + 1];
                    numbers[i + 1] = number;

                    sorted = false;
                    steps++;
                }
        }
    }
    else{
        while (!sorted){
            sorted = true;

            for (let i = 0; i < numbers.length - 1; i++)
                if (numbers[i] < numbers[i + 1]){
                    let number = numbers[i];
                    numbers[i] = numbers[i + 1];
                    numbers[i + 1] = number;

                    sorted = false;
                    steps++;
                }
        }
    }

    return steps;
}

function insertionSort(){
    let currentNumber, j;
    let steps = 0;

    if (sortBy())
    {
        for (let i = 1; i < numbers.length; i++)
        {
            currentNumber = numbers[i];
            j = i - 1;

            while (j >= 0 && numbers[j] > currentNumber)
            {
                numbers[j + 1] = numbers[j];
                j--;

                steps++;
            }

            numbers[j + 1] = currentNumber;
        }
    }
    else
    {
        for (let i = 1; i < numbers.length; i++)
        {
            currentNumber = numbers[i];
            j = i - 1;

            while (j >= 0 && numbers[j] < currentNumber)
            {
                numbers[j + 1] = numbers[j];
                j--;

                steps++;
            }

            numbers[j + 1] = currentNumber;
        }
    }

    return steps;
}

function selectionSort(){
    let steps = 0;

    if (sortBy())
    {
        let minValueIndex;

        for (let i = 0; i < numbers.length; i++){
            minValueIndex = i;

            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[j] < numbers[minValueIndex])
                    minValueIndex = j;

                steps++;
            }

            let temp = numbers[i];
            numbers[i] = numbers[minValueIndex];
            numbers[minValueIndex] = temp;
        }
    }
    else
    {
        let maxValueIndex;

        for (let i = 0; i < numbers.length; i++){
            maxValueIndex = i;

            for (let j = i + 1; j < numbers.length; j++){
                if (numbers[j] > numbers[maxValueIndex])
                    maxValueIndex = j;

                steps++
            }

            let temp = numbers[i];
            numbers[i] = numbers[maxValueIndex];
            numbers[maxValueIndex] = temp;
        }
    }

    return steps;
}

function quickSort(){

}