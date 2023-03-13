import React from 'react'
import Filters from './filters'
import './styles/bg-effects.css'

export default function Header() {
  return (
    <>
      <div className='Blur-bg' />
      <h1>The Owl Shop 🦉</h1>
      <Filters />
    </>
  )
}
