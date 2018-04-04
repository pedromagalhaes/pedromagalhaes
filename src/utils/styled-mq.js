import { generateMedia } from 'styled-media-query'

import lessVar from '../.tmp/lessVariables.json'

const customMedia = generateMedia({
  wide: lessVar.widescreenMonitorBreakpoint,
  large: lessVar.largeMonitorBreakpoint,
  largestLarge: lessVar.largestLargeMonitor,

  desktop: lessVar.computerBreakpoint,
  largestDesktop: lessVar.largestSmallMonitor,

  tablet: lessVar.tabletBreakpoint,
  largestTablet: lessVar.largestTabletScreen,

  mobile: lessVar.mobileBreakpoint,
  largestMobile: lessVar.largestMobileScreen
})

export default customMedia
