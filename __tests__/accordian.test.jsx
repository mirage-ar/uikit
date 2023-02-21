import { render, screen, cleanup } from '@testing-library/react';
import Accordion from "../components/Accordion";
import '@testing-library/jest-dom'

describe('Accordion', () => {
    it('renders an accordion fold', () => {
        render(<Accordion title="test title" content='This is the content'/>);

        const accordionElement = screen.getByTestId('accordion-test');

        expect(accordionElement).toBeInTheDocument();
        expect(accordionElement).toHaveTextContent('test title');
        expect(accordionElement).toHaveTextContent('This is the content');
        
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument
    })
})