import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..'

afterEach(cleanup);

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life'}
];

describe('Contact Component', () => {
    it('renders', () => {
        render(<ContactForm />)
    });
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>)
        expect(asFragment()).toMatchSnapshot();
    })
});


