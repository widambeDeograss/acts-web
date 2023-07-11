import React from 'react'
import colors from '../constants/colors'
import { Typography } from '@material-tailwind/react'

const PageHeroSection = (props) => {
  return (
    <div>
       <div
                 style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: "rgba(76, 175, 80, 0.3)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '20vh',
                    positoni: 'relative'
                  }}
                >
                   <div
                  style={{
                    backgroundColor: colors.primary,
                    width: '100%',
                    height: '20vh',
                    opacity: 0.7
                  }}
                ></div>
                <Typography variant='h5' style={{ float: "left", marginTop: "-40px", marginLeft:"23px" }} > <strong>{props.title}</strong></Typography>
            </div>
    </div>
  )
}

export default PageHeroSection