import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProfileCard } from './profile-card'

const defaultProps = {
  name: 'PriestPw',
  bio: 'Mahasiswa yang suka ngoding',
  skills: ['React', 'Node'],
  avatarUrl: 'https://example.com/avatar.png',
  githubUrl: 'https://github.com/pandita05-xx',
  location: 'Malang, Jawa Timur',
}

describe('ProfileCard', () => {
  it('merender link GitHub', () => {
    render(<ProfileCard {...defaultProps} />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://github.com/pandita05-xx')
  })

  it('merender lokasi', () => {
    render(<ProfileCard {...defaultProps} />)
    expect(screen.getByText(/Malang, Jawa Timur/)).toBeInTheDocument()
  })
})