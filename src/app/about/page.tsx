"use client";
import React, { useEffect, useState } from "react";
import ChatFrame from "@/components/ui/chat-frame";
import { PinContainer } from "@/components/ui/3d-pin";

// kept intentionally minimal: contact links removed per request

// Keeping the page focused: the long tools list is removed.

function Page() {
  // simplified: no dynamic tool loading needed
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Xuan Canh</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Web Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <div className="text-xs text-zinc-500">Contact info hidden</div>
            </div>
          </div>
        </aside>
        <main className="basis-3/4">
          <div className="p-10 border-[.5px] rounded-md border-zinc-600" style={{ backdropFilter: "blur(2px)" }}>
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
                <div className="text-xl font-semibold">Xuan Canh</div>
                <div className="w-full max-w-sm relative h-64">
                  {/* 3D pin container wraps any 3D content; use as placeholder for Spline/3D objects */}
                  <PinContainer title="3D Preview" href="#">
                    <div className="w-48 h-32 bg-gradient-to-br from-cyan-600 to-emerald-500 rounded-lg flex items-center justify-center text-black font-bold">3D</div>
                  </PinContainer>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <ChatFrame name="Xuan Canh" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
