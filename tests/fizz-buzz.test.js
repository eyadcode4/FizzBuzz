import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../src/fizz-buzz";

describe('fizzbuzz as function', () => {

    it('number divide by three should return <Fizz>', () => {
    
        //given 
        const numb = 3
        const expected = 'Fizz'
        //when
        const result = fizzbuzz(numb)
        // then
        expect(result).toBeTypeOf('string')
        expect(result).toEqual(expected)
    })

    it('nummber divide by five should return <Buzz>', () => {
         //given 
         const numb = 5
         const expected = 'Buzz'
         //when
         const result = fizzbuzz(numb)
         // then
         expect(result).toBeTypeOf('string')
         expect(result).toEqual(expected)
     })
     it('nummber divide by five and three should return <FizzBuzz>', () => {
        //given 
        const numb = 15
        const expected = 'FizzBuzz'
        //when
        const result = fizzbuzz(numb)
        // then
        expect(result).toBeTypeOf('string')
        expect(result).toEqual(expected)
    })

   

})
