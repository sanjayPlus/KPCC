import React from 'react'

function Container({children}: Readonly<{children: React.ReactNode}>) {
  return (
   <div >
    {children}
   </div>
  )
}

export default Container;