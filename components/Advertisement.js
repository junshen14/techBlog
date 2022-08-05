import React from 'react'
import Link from 'next/link'
import aWeber from '../public/aweber.png'
import hostGator from '../public/hostgator.png'
import clickFunnels from '../public/clickFun.png'

const Advertisement = () => {
  return (
    <>
      <EachAdvertisement
        imageSrc={aWeber}
        referenceSrc={`https://www.aweber.com/`}
        title={'AWeber'}
        description={
          'Try AWeber free today and get all the solutions to grow your email list, engage with your audience and increase sales. No credit card required.'
        }
      />
      <EachAdvertisement
        imageSrc={clickFunnels}
        referenceSrc={`https://www.clickfunnels.com/?cf_affiliate_id=2930841&affiliate_id=2930841&aff_sub=sm&gclid=CjwKCAjwrZOXBhACEiwA0EoRD3yZtW0AXKP-0U_ikG89FqtVzuJOtqRO8EmvBvS43qYXY46pKKK_dxoCSS0QAvD_BwE`}
        title={'ClickFunnels'}
        description={
          'Now Build Your First Funnel For Free Right Now. Landing Page Builder For You All In One Tool For Marketing. Start Free 14 Day Trial.'
        }
      />
      <EachAdvertisement
        imageSrc={hostGator}
        referenceSrc={`https://www.hostgator.com/web-hosting/?utm_source=google&utm_medium=brandsearch&gclid=CjwKCAjwrZOXBhACEiwA0EoRD8rrZeg-xEGGQT8-Y_YF3mcXvYXzuhQx8mV0xakOV2-Qemm2-gr9QxoCOeoQAvD_BwE&gclsrc=aw.ds`}
        title={'HostGator'}
        description={
          'We Are One Of The Easiest Platforms To Use & Provide You w/ The Best Hosting Solutions. 24/7/365 Support, 45-Day Money-Back Guarantee, 99.9% Uptime & Tons Of Free Tech Features'
        }
      />
    </>
  )
}

export const EachAdvertisement = ({
  imageSrc,
  referenceSrc,
  title,
  description,
}) => {
  return (
    <div className="mb-10">
      <img
        className="align-middle"
        src={imageSrc.src}
        style={{ height: 100 }}
      />

      <div className="flex-grow pt-5">
        <Link href={referenceSrc} className="text-md">
          <span className=" cursor-pointer text-xl text-white transition duration-100 hover:text-red-500">
            {title}
          </span>
        </Link>
        <br />
        <span className="text-justify text-white">{description}</span>
      </div>
    </div>
  )
}

export default Advertisement
