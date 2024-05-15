import React from 'react'

function About() {
    return (
        <div className='flex-col'>
            <h1 className='text-center text-4xl font-bold m-4'>About us</h1>
            <p className='text-xl text-center'>Welcome to <span className='text-blue-800 font-bold'>HATUA KENYA &  ENERGY SOLUTION!</span>  We specialize in providing borehole drilling services to homeowners, businesses, and agricultural operations. We understand that finding a reliable and experienced drilling company can be difficult, so we strive to provide the highest quality service with the most reasonable pricing. Our team of experienced and certified technicians have years of experience in the field and are committed to providing the best service possible. We use the latest technology and equipment to ensure the job is done right the first time, every time. Thank you for considering our services and we look forward to working with you!</p>

            <ul className="space-y-4 text-left text-xl m-8">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-5 h-5 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>We strive to be honest and ethical in all of our dealings and to maintain the highest standards of conduct. We believe in treating people with respect and fairness.</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-5 h-5 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>We take ownership of our decisions, actions and results and are responsible to our customers, colleagues, and stakeholders.</span>
                </li>

                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-5 h-5 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                    <span>We seek and embrace new ideas and technologies to create solutions, improve performance, and increase customer satisfaction.: <span className="font-semibold text-gray-900 dark:text-white"></span></span>
                </li>
            </ul>

        </div>
    )
}

export default About
