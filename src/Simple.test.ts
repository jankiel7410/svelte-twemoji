import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/svelte'

import Component from './Simple.svelte'
import { twemoji } from '.'

test('shows proper text when rendered', () => {
  const { getByText } = render(Component, {})

  expect(getByText('This is it. 💻')).toBeInTheDocument()
})

test('twemoji action converts emoji to png images', () => {
  render(Component, {
    props: { action: twemoji }
  })

  expect(screen.getByText('This is it.')).toBeInTheDocument()

  const img = screen.getByAltText('💻');
  expect(img).toBeInTheDocument();
  expect(img).toHaveClass('emoji');

  const src = img.getAttribute('src');
  expect(src).toMatch(/1f4bb\.png/);
})


test('works after updating the prop', async () => {
  const { component } = render(Component, {
    props: { action: twemoji }
  })

  const message = 'Psst. Secret message 🤐'
  await component.$set({ message })

  expect(screen.getByText('This is it.')).toBeInTheDocument()
  expect(screen.getByAltText('💻')).toBeInTheDocument();

  expect(screen.getByText('Psst. Secret message')).toBeInTheDocument()

  const img = screen.getByAltText('🤐');  
  expect(img).toBeInTheDocument();
  expect(img).toHaveClass('emoji');

  const src = img.getAttribute('src');
  expect(src).toMatch(/1f910\.png/);
})
