import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const product = [
  {
    name: "Freemium Model",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Premium Features",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Subscription Tiers",
    description: "Yoblr Plus, Yoblr Gold, Yoblr Platinum",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Pay-Per-Use Features",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
];

const FlyoutMenu = ({ children }) => {
  return (
    <Popover className="relative ">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        {children}
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-transparent border text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {product.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/50"
              >
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg border-black bg-transparent group-hover:bg-transparent">
                  <item.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-white group-hover:text-gray-20"
                  />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-white">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-10">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          {callsToAction.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
              {item.name}
            </a>
          ))}
        </div> */}
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default FlyoutMenu;
