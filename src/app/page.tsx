"use client";
import "regenerator-runtime/runtime";
import Image from "next/image";
import { IconVolume,IconFileUpload } from '@tabler/icons-react';


import React, {useState,ChangeEvent} from "react";
import TextArea from '@/components/Inputs/TextArea';
import SpeechRecognitionComponent from '@/components/Speech Recognition/SpeechRecognition';

export default function Home() {

  const [sourceText,setSourceText]=useState<string>("");
  const handleAudioPlayback = (text:string) =>{
    const utterance=new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };
  return <div>
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
          <div className="text-center">
             <h1
             className="text-4xl sm:text-6xl font-bold text-neutral-200"
             >Chit<span className="text-[#f87315]">
              Chat</span></h1>
              <p className="mt-3 text-neutral-400">
                ChitChat: Bridging voices , connecting worlds 
              </p>

            <div className="mt-7 sm:mt-12 max-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-4-grid-cols-1">
                <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                  <TextArea
                  id="source-language"
                  value={sourceText}
                  onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>(
                    setSourceText(e.target.value)
                  )}
                  placeholder="Source Language"
                  />
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex space-x-2 flex-row">
                      <SpeechRecognitionComponent 
                      setSourceText={setSourceText}
                      />
                      <IconVolume 
                      size={22}
                      onClick={() => handleAudioPlayback(sourceText)}
                      />
                      {/* <IconFileUpload
                      size={22}
                      onClick={()=> handleFileUpload()}
                      /> */}
                    </span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
