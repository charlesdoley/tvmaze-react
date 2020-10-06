import React from 'react'
import ReactDOM from 'react-dom'
import TagList from '../TagList'
import { isTSAnyKeyword } from '@babel/types'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';

it("renders without crashing", ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<TagList></TagList>, div);
})

it("renders incorrectly", ()=> {
    const { getByTestId } = render(<TagList tag="space"></TagList>);
    expect(getByTestId('tag')).toHaveTextContent('space')
})