import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ListHintsError from './list_hints_error'

describe('ListHintsError', () => {
  // beforeEach(() => {
  //   vi.clearAllMocks()
  // })

  // afterEach(() => {
  //   vi.restoreAllMocks()
  //   document.body.innerHTML = ''
  // })

  const { getByRole } = render(<ListHintsError error={new Error('Page error')} />)

  it('should to have page title', () => {
    expect(getByRole('heading', { name: /something went wrong!/i })).toBeDefined();
  })

  it('should to have error message', () => {
    expect(screen.getByText(/page error/i)).toBeDefined();
  })

  it('should to have try again button', () => {
    expect(screen.getByRole('button', {
      name: /try again/i
    })).toBeDefined();
  })

  // it('should not to have error message', () => {
  //   render(<ListHintsError error={{ message: undefined } as Error} />)
  //   screen.logTestingPlaygroundURL();

  //   expect(screen.queryByText(/page error/i)).not.toBeDefined();
  // })
})