export function fizzbuzz(n1) {
    if (n1 % 3 === 0 && n1 % 5 === 0) {
        return 'FizzBuzz'
    }

    if (n1 % 3 === 0 ) {
        return 'Fizz'

    }
    if (n1 % 5 === 0) {
        return 'Buzz'
    }
    else {
        return ' el ${n1}'
    }    
}