import React from 'react'

import gif404 from '../../images/404.gif'

const Page404 = () => (
    <div class="text-center">
        <h1>404 - Page not found</h1>
        <p>Onde você pensa que está indo?</p>
        <img src={gif404} alt="Perdido" title="Tá perdido, é?"/>
    </div>
)

export default Page404