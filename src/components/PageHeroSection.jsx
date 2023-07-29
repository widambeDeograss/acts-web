import React from 'react'
import colors from '../constants/colors'
import { Typography } from '@material-tailwind/react';
import pe9 from "../assets/img/DJI_0981-min.JPG";
import pe8 from "../assets/img/DJI_0974.jpeg";

const PageHeroSection = (props) => {
  return (
    <div>
       <div
                 style={{
                    backgroundImage: `url(${pe8})`,
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