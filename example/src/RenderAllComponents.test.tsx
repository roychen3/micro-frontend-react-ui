import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import RenderAllComponents from './RenderAllComponents'

it('simple RenderAllComponents test', async () => {
  render(<RenderAllComponents />)
  await userEvent.click(screen.getByText('normal'))
  await userEvent.click(screen.getByText('primary'))
  await userEvent.click(screen.getByText('provider primary'))
})
