import React from 'react'
import { Link } from 'react-router-dom'

import logo_footer from '../images/nineworphi-footer.svg'

const Footer = () => (
    <footer>
        <Link to="/"><img src={logo_footer} alt="9Worphi" title="9Worphi"/></Link>
    </footer>
)

export default Footer