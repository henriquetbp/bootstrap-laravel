import AppSidebar from '@/Components/coreui/AppSidebar';
import { CCard, CCardBody, CContainer } from '@coreui/react';
import React from 'react';
import '../../scss/style.scss';
import AppHeader from '@/Components/coreui/AppHeader';


// import { Container } from './styles';

function BackOfficeLayout({children}) {
  return <div>
    <AppSidebar />
    <div className='wrapper d-flex flex-column min-vh-100 bg-light'>
        <AppHeader />
        <CContainer className='pb-5'>
            <CCard style={{width: '100%'}}>
                <CCardBody>
                    {children}
                </CCardBody>
            </CCard>
        </CContainer>
    </div>
    </div>;
}

export default BackOfficeLayout;