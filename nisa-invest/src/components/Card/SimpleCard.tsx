
interface SimpleCardProps {
title?:string;
description?:string;
btnText?: string;
children?: React.ReactNode;
}

export function SimpleCard ({title, description, btnText,  children}: SimpleCardProps) {

  return (
      <div className="bg-indigo-400 rounded-3xl p-8 max-w-xl w-full relative">
        <h2 className="text-3xl font-bold mb-4 text-black">
         {title}
        </h2>
        <p className="text-2xl text-black">
          {description}
        </p>
         { btnText &&  <button className="absolute bottom-8 right-8 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
         {btnText}
         {children}
        </button>}
      </div>
 
  )
};