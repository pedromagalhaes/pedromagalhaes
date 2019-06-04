import Logo from '@static/logo.svg'
import Styles from './Logo.styles'

const { useState, useEffect } = React

const LoadingLogo = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  })

  return !isLoading ? (<Styles><Logo /></Styles>) : null
}

export default LoadingLogo
