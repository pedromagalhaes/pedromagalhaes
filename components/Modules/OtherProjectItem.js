import { Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import { IconGithub, IconExternal, IconFolder } from '../Icons'

const OtherProjectItem = ({ title }) => (
  <div className='project'>
    <div className='project-inner'>
      <div>
        <div className='project-header'>
          <div className='folder'>
            <IconFolder />
          </div>
          <div className='links'>
            <a
              className='icon-link'
              href=''
              target='_blank'
              rel='nofollow noopener noreferrer'
              aria-label='Github Link'
            >
              <IconGithub />
            </a>

            <a
              className='icon-link'
              href=''
              target='_blank'
              rel='nofollow noopener noreferrer'
              aria-label='External Link'
            >
              <IconExternal />
            </a>
          </div>
        </div>
        <div>
          <Header as='h5' content={title || ''} inverted />
        </div>
        <div className='project-description'>
          <p>
            Custom wordpress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up
            selling the only reactive shoe insert that prevents blisters from forming.
          </p>
        </div>
      </div>
      <div>
        <ul className='tech-list'>
          <li>Tech</li>
          <li>Tech</li>
          <li>Tech</li>
        </ul>
      </div>
    </div>
  </div>
)

OtherProjectItem.propTypes = {
  title: PropTypes.string
}

export default OtherProjectItem
