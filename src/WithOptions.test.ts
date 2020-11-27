import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/svelte'

import Component from './WithOptions.svelte'


test('twemoji action converts emoji to png images', () => {
  render(Component)

  expect(screen.getByText('Hello!')).toBeInTheDocument()

  const img = screen.getByAltText('👋');
  expect(img).toBeInTheDocument();
  expect(img).toHaveClass('emoji-class');

  const src = img.getAttribute('src');
  expect(src).toMatch(/1f44b\.png/);
})



test('changing twemoji options once the action was applied is not possible', async () => {
    const { component } = render(Component)
    console.warn = jest.fn()
    await component.$set({className: 'foo-class'})
    expect(console.warn).toBeCalledWith('Changing twemoji options after the action was mounted is not possible.')
    expect(screen.getByText('Hello!')).toBeInTheDocument()
  
    const img = screen.getByAltText('👋');
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass('emoji-class');
  
  })
  