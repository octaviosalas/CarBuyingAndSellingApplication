import React from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
      name: 'Sell your car',
      description:
        'You can publish your vehicle, leave comments about it, indicate its characteristics and reach possible interested parties..',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Finding your ideal used car',
      description:
        'You can search for your ideal car in a matter of seconds. You can also coordinate visits to meet him..',
      icon: LockClosedIcon,
    },
    {
      name: 'Chat with your buyer/seller',
      description:
        'You can send and receive messages to people interested in buying your vehicle. You can also do it with those who have your ideal car for sale..',
      icon: ArrowPathIcon,
    },
    {
      name: 'Apply filters on your search',
      description:
        'To save time, you can choose the filters you want in your searches. In this way we make sure that your ideal car is found quickly..',
      icon: FingerPrintIcon,
    },
  ]

  
export default function SecondMain() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">What does the App allow me to do?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
               Everything you need to buy or sell .
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }