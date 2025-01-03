import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import CounterApp from "../CounterApp";

const initialValue = 10

describe('Test in <CounterApp/>', () => {
    afterEach(cleanup)
    // it('Should match snapshot', () => {
    //     const { container } = render( <CounterApp initialValue={initialValue} /> )
    //     // screen.debug()
    //     expect(container).toMatchSnapshot()
    // })
    it(`Should render the initialValue: ${initialValue}`, () => {
        render( <CounterApp initialValue={initialValue}/> )
        expect(screen.getByTestId('test-initialValue').innerHTML).toContain(initialValue)
    })
    it(`Should increment value when clicking +1`, () => {
        render( <CounterApp initialValue={initialValue}/> )
        const incrementButton = screen.getByTestId('test-increment')
        fireEvent.click(incrementButton)
        expect(screen.getByTestId('test-initialValue').innerHTML).toContain(initialValue + 1)
    })
    it(`Should decrement value when clicking -1`, () => {
        render( <CounterApp initialValue={initialValue}/> )
        const decrementButton = screen.getByTestId('test-decrement')
        fireEvent.click(decrementButton)
        expect(screen.getByTestId('test-initialValue').innerHTML).toContain(initialValue - 1)
    })
    it(`Should reset the state to initialValue`, () => {
        render( <CounterApp initialValue={initialValue}/> )
        const decrementButton = screen.getByTestId('test-decrement')
        fireEvent.click(decrementButton)
        fireEvent.click(decrementButton)
        fireEvent.click(decrementButton)
        const resetButton = screen.getByTestId('test-reset')
        fireEvent.click(resetButton)
        expect(screen.getByTestId('test-initialValue').innerHTML).toContain(initialValue)
    })
})