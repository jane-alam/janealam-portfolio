import React from 'react'
import Header from '../components/header'


export default ({children}) => (
    <div style={{margin: `0 auto`, maxWidth: 1200, padding:`1.25rem 1rem`}}>
        <Header />
        {children}
    </div>
)