import React from 'react'
import HiddenCss from '@material-ui/core/Hidden/HiddenCss'
import omit from 'lodash/omit'

const Media = (props) => {
  const hiddenProps = omit(props, 'mobile', 'pc')

  switch (true) {
    case Boolean(props.mobile):
      return (
        <HiddenCss {...hiddenProps} smUp>
          {props.children}
        </HiddenCss>
      )
    case Boolean(props.pc):
      return (
        <HiddenCss {...hiddenProps} xsDown>
          {props.children}
        </HiddenCss>
      )
    default:
      return <>{props.children}</>
  }
}

export default Media
