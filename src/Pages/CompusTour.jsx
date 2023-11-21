import React from 'react'
import PageHeroSection from '../components/PageHeroSection'
import { Typography } from '@material-tailwind/react'

function CampusTour() {
  return (
    <div>
       <div>
      <PageHeroSection title="Campus Tour" />
      <Typography variant="h2" className="mt-5 font-semibold">
        Join ACTS Today
      </Typography>
      <Typography variant="h2" className=""></Typography>
      <Typography
        variant="lead"
        className=" mx-auto text-center w-2/3  mt-2 font-light mb-6"
      >
        Acts exists to develop God’s ministers who are capable of pioneering
        indigenous churches with the potential to grow spiritually, numerically,
        and geographically in the power of the Holy Spirit, thus fulfilling the
        Great commission
      </Typography>
    </div>
    </div>
  )
}

export default CampusTour