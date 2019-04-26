import React from 'react'
import { Breadcrumb, Container } from 'semantic-ui-react'

const sections = [
  { key: 'home', content: 'Home', link: true },
  { key: 'registration', content: 'Registration', link: true },
  { key: 'info', content: 'Personal Information', active: true }
]

const BreadcrumbComponent = () => (
  <Container>
    <Breadcrumb divider='/' sections={sections} style={{ margin: '10px auto 20px' }} />
  </Container>
)

export default BreadcrumbComponent
