import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);


const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

describe('Modal component', () => {
    it('renders', () => {
        // baseline render
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal}/>)
    });
    it('Matches snapshot', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto}/>);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('Click Event', () => {
    if('calls onClose handler', () => {
        // Arrange: Render Modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}/>)
        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'));
        // Assert: Expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})