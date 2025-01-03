import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup, screen } from "@testing-library/react";
import FirstApp from "../FirstApp";

const title = 'FirstApp';
const subTitle = 'Goku';
describe('Test in <FirstApp/>', () => {
    // each test render the component so we need to clean it before each test
    afterEach(cleanup)
        

    it('should match with snapshot', () => {
        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    })
    it('should show the title', () => {
        render(<FirstApp title={title} />)
        expect(screen.getByText(title)).toBeTruthy();
    })
    it('should show the title inside h1 tag', () => {
        render(<FirstApp title={title} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    })
    it('should show the subtitle inside h2 tag', () => {
        render(<FirstApp title={title} subtitle={subTitle} />)
        expect(screen.getByTestId('test-subtitle')).toBeTruthy();
        expect(screen.getByTestId('test-subtitle').innerHTML).toContain(subTitle)
    })
})