import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
            <header className='header'>
<div className='container'>
    <div className='logo'>
<Link href='/'>
    Gachiri Mwangi. 
</Link>
    </div>
   <div className='links'>
    <Link href='/about'>About</Link> 
    <Link href='/about/team'>Team</Link>
    <Link href='/code/repos'>Code</Link>
   </div>
</div>
      </header>
    </div>
  )
}

export default Header
