// const { describe } = require('yargs');


describe('last element', ()=>{
    const {getLast} = require('../arrays');
    it('obtiene el ultimo elemento', ()=>{
        expect(getLast([1,2])).toBe(2)
    })
})

describe('push', ()=>{
    const {concat} = require('../arrays');
    it('agrega un elemento', ()=>{
        expect(concat([1,1], 2)).toEqual([1,1,2])
    })
})