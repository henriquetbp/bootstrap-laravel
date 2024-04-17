import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className='pl-20'>
        <a href="https://nishikisake.com.br/" target="_blank" rel="noopener noreferrer">
          Nishiki
        </a>
        <span className="ms-1">&copy; 2024 todos os direitos reservados.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Produzido por</span>
        <a href="https://site.marrs.com.br/" target="_blank" rel="noopener noreferrer">
          Marrs Studio
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
