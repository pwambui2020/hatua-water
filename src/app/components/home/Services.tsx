import React from 'react';
import Card from '../card';

function Services() {
    return (
         <div>
        <div className="bg-blue-300 absolute text-center items-center">
          <h1 className='text-4xl'>Our Services</h1>
          <div className="grid grid-cols-4 gap-4 m-4">

            <Card
              title="Industrial and Irrigation Boreholes"
              description="we specialize in delivering cutting-edge irrigation and industrial borehole services that optimize water usage and enhance productivity."
              image="/images/water-tower.avif"
            />
            <Card
              title="Well and Submersible Pumps"
              description="We specialize in providing high-performance pumping solutions tailored to meet the diverse needs of residential, commercial, agricultural, and industrial clients. "
              image="/images/water6.avif"
            />
            <Card
              title="Solar"
              description=" Our solar installation services harness the abundant energy of the sun to provide sustainable power solutions for homes and businesses alike. "
              image="/images/solar.avif"
            />
            <Card
              title="Tower Construction"
              description="Our commitment to quality craftsmanship, safety, and sustainability ensures that each tower we build not only meets but exceeds industry standards. With a focus on efficiency and attention to detail, we deliver projects on time and within budget, without compromising on excellence."
              image="/images/water-tank.avif"
            />
          </div>
        </div>
      </div> 
    )
}

export default Services
