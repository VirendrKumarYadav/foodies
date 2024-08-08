"use client"
import Image from 'next/image'
import React from 'react'

const content = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://m.media-amazon.com/images/S/amzn-author-media-prod/bai2k8bk2rgejfm92uplj1ju1p._SY450_CR0%2C0%2C450%2C450_.jpg"
                                width={80}
                                height={80}
                            />
                            <p className="leading-relaxed">
                                “Amazing service! The quality exceeded my expectations. The team was very responsive and attentive to my needs. Highly recommended!”
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JANE DOE</h2>
                            <p className="text-gray-500">Satisfied Customer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://www.fedex.com/content/dam/fedex/us-united-states/about-us/images/2020/Q4/SMITH_john_circle_72495571.jpg"
                                width={80}
                                height={80}
                            />
                            <p className="leading-relaxed">
                                “The experience was fantastic! The product quality is top-notch, and the customer service was incredibly helpful and professional.”
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JOHN SMITH</h2>
                            <p className="text-gray-500">Regular Client</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://studentaffairs.unl.edu/images/news-article/EmilyJohnson.jpg"
                                width={80}
                                height={80}
                            />
                            <p className="leading-relaxed">
                                “Excellent support and fast delivery! The quality of the items was exactly what I was looking for. Will definitely use their services again.”
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">EMILY JOHNSON</h2>
                            <p className="text-gray-500">Happy Buyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default content