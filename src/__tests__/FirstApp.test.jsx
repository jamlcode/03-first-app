import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import FirstApp from "../FirstApp";

const title = 'FirstApp';
describe('Test in <FirstApp/>', () => {
    // each test render the component so we need to clean it before each test
    afterEach(cleanup)
        

    // it('should match with snaps hot', () => {
    //     const { container } = render(<FirstApp title={title} />)
    //     expect(container).toMatchSnapshot();
    // })
    it('should show the title', () => {
        const { getByText } = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy();
    })
    it('should show the title inside h2 tag', () => {
        const { getByText } = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy();
    })
    it('should show the title inside h2 tag', () => {
        const subTitle = 'Goku';
        const { getByTestId } = render(<FirstApp title={title} subtitle={subTitle} />)
        expect(getByTestId('test-subtitle')).toBeTruthy();
        expect(getByTestId('test-subtitle').innerHTML).toContain(subTitle)
    })
})