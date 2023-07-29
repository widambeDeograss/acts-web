import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/solid'
import { Card, Typography } from '@material-tailwind/react'
import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div class="w-full shrink-0 grow-0  basis-auto lg:w-full mt-10">
                <Card className='w-full'>
                    <Typography variant="h4" className="font-bold mb-5 text-lef">Contact Us</Typography>
                    <div class="flex flex-wrap mx-auto">
                        <div class="mb-12 w-full shrink-0 grow-1 basis-auto md:w-6/12 md:px-3 lg:px-6">
                            <div class="flex items-start">
                                {/* <div class="shrink-0">
                                <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                    </svg>
                                </div>
                            </div> */}
                                <div class="ml-1 grow">
                                    <p class="mb-2 font-bold text-xs  ">
                                        GIVE US A CALL
                                    </p>
                       
                                    <div className=" flex flex-row ml-10">
                                        <PhoneArrowDownLeftIcon
                                            // color="white"
                                            height={20}
                                            className="mt-1"
                                        />
                                        <Typography as="li" variant="small" className="p-1 font-body">
                                            <a href="#" className="flex items-center text-xs">
                                            +255 000 000 000
                                            </a>
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                            <div class="flex items-start">
                                {/* <div class="shrink-0">
                                <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>
                                </div>
                            </div> */}
                                <div class=" grow">
                                    <p class="mb-2 font-bold text-xs ">
                                        AFRICA’S CONTINENTAL THEOLOGICAL SEMINARY (ACTS)
                                    </p>
                                    <p class="text-neutral-500 dark:text-neutral-200">
                                        Box 70 Dodoma, Tanzania
                                    </p>
                                    <p class="text-neutral-500 dark:text-neutral-200">
                                    +255 000 000 000
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </Card>
            </div>
            <div class="container  mx-auto md:px-6">
                <section class="mb-11 text-center">
                    <div class="py-12 md:px-12">
                        <div class="container mx-auto xl:px-32">
                            <div class="grid items-center lg:grid-cols-2">
                                <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                    <div
                                        class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]  md:px-12 lg:-mr-14">
                                        <h2 class="mb-12 text-base text-lef font-bold">Send us a message</h2>
                                        <form>
                                            <div>
                                                <label
                                                    for="first_name"
                                                    class="block mb-2 text-sm text-left font-medium text-gray-900 "
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="first_name"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                    placeholder=""
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    for="first_name"
                                                    class="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    id="first_name"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                    placeholder=""
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    for="first_name"
                                                    class="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    type="text"
                                                    id="first_name"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                    placeholder=""
                                                    required
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                class="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div class="md:mb-12 lg:mb-0">
                                    <div
                                        class="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253888.9331992513!2d35.478111725000005!3d-6.128739600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184de59c9d373987%3A0xb5d84a416a25f8be!2sTanzania%20Assemblies%20of%20God%20Head%20Office%20-%20Dodoma!5e0!3m2!1sen!2stz!4v1676538581952!5m2!1sen!2stz" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                            class="absolute left-0 top-0 h-full w-full rounded-lg"
                                            frameborder="0"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ContactUs