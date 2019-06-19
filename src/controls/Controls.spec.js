import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; 


describe('lock button', () => {
    it('should not work while gate is open', () => {
        const component = render(<Controls closed={false} locked={false} />);
        const button = component.getByText(/lock gate/i);
        expect(button).toBeNull();

    });
    it('changes text to unlocked when gate unlocked', () => {
        const spy = jest.fn();
        const component = render(<Controls closed={true} locked={false} />);
        const button = component.getByText(/lock gate/i);
        fireEvent.click(button);
        expect(button).toContain('Unlock Gate');
    })
})