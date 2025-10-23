import React from 'react'
import { Button } from '../ui/button'

const CTAButton = (props: React.ComponentProps<typeof Button>) => {
  return (
    <Button {...props} className={`cta-button ${props.className} font-normal tracking-widest rounded-[4px] sm:w-max w-full p-6`}>
      {props.children}
    </Button>
  )
}

export default CTAButton