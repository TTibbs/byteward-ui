"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { servicesGrid } from "@/lib/data";

export function ServiceGridTest() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]"
        className="bg-gradient-to-br from-amber-500 via-orange-600 to-red-700"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {servicesGrid[0].title}
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            {servicesGrid[0].description}
          </p>
        </div>
        <Image
          src={servicesGrid[0].image || "/default-image.png"}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%] -bottom-16 object-contain rounded-2xl"
          priority
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 min-h-[300px]"
        className="bg-gradient-to-br from-red-600 via-rose-600 to-pink-700"
      >
        <div className="max-w-[60%]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {servicesGrid[1].title}
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            {servicesGrid[1].description}
          </p>
        </div>
        <Image
          src={servicesGrid[1].image || "/default-image.png"}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 lg:-right-[15%] -bottom-5 object-contain rounded-2xl max-w-[50%]"
          priority
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
        className="bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700"
      >
        <div className="max-w-sm">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {servicesGrid[2].title}
          </h2>
          <p className="mt-4 max-w-[12rem] text-left text-base/6 text-neutral-200">
            {servicesGrid[2].description}
          </p>
        </div>
        <Image
          src={servicesGrid[2].image || "/default-image.png"}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 lg:-right-[60%] -bottom-32 object-contain rounded-2xl"
          priority
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 min-h-[300px]"
        className="bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700"
      >
        <div className="max-w-[60%]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {servicesGrid[3].title}
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            {servicesGrid[3].description}
          </p>
        </div>
        {servicesGrid[3].image && (
          <Image
            src={servicesGrid[3].image || "/default-image.png"}
            width={500}
            height={500}
            alt={servicesGrid[3].title}
            className="absolute -right-10 lg:-right-[15%] -top-28 object-contain rounded-2xl max-w-[40%]"
            priority
          />
        )}
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]"
        className="bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-700"
      >
        <div className="max-w-sm">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {servicesGrid[4].title}
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            {servicesGrid[4].description}
          </p>
        </div>
        <Image
          src={servicesGrid[4].image || "/default-image.png"}
          width={500}
          height={500}
          alt="CMS development"
          className="absolute -right-4 lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          priority
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 h-full min-h-[500px] lg:min-h-[300px]"
        className="bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-700"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {servicesGrid[5].title}
          </h2>
          <p className="mt-4 max-w-[12rem] text-left text-base/6 text-neutral-200">
            {servicesGrid[5].description}
          </p>
        </div>
        <Image
          src={servicesGrid[5].image || "/default-image.png"}
          width={500}
          height={500}
          alt="SEO optimization"
          className="absolute -right-4 lg:-right-[60%] -bottom-32 object-contain rounded-2xl"
          priority
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 min-h-[300px]"
        className="bg-gradient-to-br from-teal-600 via-emerald-600 to-green-700"
      >
        <div className="max-w-[60%]">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {servicesGrid[6].title}
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            {servicesGrid[6].description}
          </p>
        </div>
        {servicesGrid[6].image && (
          <Image
            src={servicesGrid[6].image || "/default-image.png"}
            width={500}
            height={500}
            alt={servicesGrid[6].title}
            className="absolute -right-10 lg:-right-[60%] -top-10 object-contain rounded-lg"
            priority
          />
        )}
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
        className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700"
      >
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {servicesGrid[7].title}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            {servicesGrid[7].description}
          </p>
        </div>
        <Image
          src={servicesGrid[7].image || "/default-image.png"}
          width={500}
          height={500}
          alt="Security services"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          priority
        />
      </WobbleCard>
    </div>
  );
}
