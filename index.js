// Your code here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(character="*"){
    return function(emphatic){
        return `You are ${character}${emphatic}${character}!`;
    }
}

const Calculator = {
    add: function(a,b) {
      return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
      return a*b;
    },
    divide: function(a,b){
      return a/b;
    }
}

function actionApplyer (a, arrayOfTransforms) {
    let result = a;
    for (let transform of arrayOfTransforms) {
        result = transform(result);
    }
    return result;
}