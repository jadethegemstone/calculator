
function display(value) {

    document.querySelector("#displayBox").value += value;

}

function clearCalc() {

    document.querySelector("#displayBox").value = "";

}

function calculate() {
    const expression = document.querySelector("#displayBox").value;
    //const answer = calculation(expression);

    const answer = calculation(expression);


    document.querySelector("#displayBox").value = answer;

}

function calculation(expression) {
    const equation = expression;
    let op = null;
    let answer = parseInt(equation[0]);

    for (let i = 1; i < equation.length; i++) {
        if (equation[i] == '+' || equation[i] == '-' || equation[i] == 'x' || equation[i] == '/') {
            op = equation[i];
        } else {
            if (op == '+') {
                answer += parseInt(equation[i]);
            } else if (op == '-') {
                answer -= parseInt(equation[i]);
            } else if (op == 'x') {
                answer *= parseInt(equation[i]);
            } else if (op == '/') {
                answer /= parseInt(equation[i]);
            }

        }
    }

    return answer;

}