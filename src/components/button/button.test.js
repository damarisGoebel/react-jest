import React from 'react'
import ReactDOM from 'react-dom'
import Button from './button'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import renderer from 'react-test-renderer'

afterEach(cleanup)
it('renders without crashing', () => {
    const div = document.createElement("div")
    ReactDOM.render(<Button/>, div)
})

it('renders button correctly', () => {
    const {getByTestId} = render(<Button label="Click me" />)
    expect(getByTestId('button')).toHaveTextContent('Click me')
})

it('renders button correctly with save', () => {
    const {getByTestId} = render(<Button label="save me" />)
    expect(getByTestId('button')).toHaveTextContent('save me')
})

it('matches snapshot', () => {
    const tree = renderer.create(<Button label="save"/>).toJSON();
    expect(tree).toMatchSnapshot();
})

it('matches snapshot 2', () => {
    const tree = renderer.create(<Button label="click me please"/>).toJSON();
    expect(tree).toMatchSnapshot();
})