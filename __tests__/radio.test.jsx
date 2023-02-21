import { render, screen, cleanup } from '@testing-library/react';
import Radio from "../components/Radio"
import '@testing-library/jest-dom'

describe('Radio', () => {
    it('renders an radio selector', () => {
        render(<Radio title="test" values={["one", "two", "three"]}/>);

        const radioElement = screen.getByTestId('radio-test');

        expect(blah).toBeInTheDocument();
    })
})