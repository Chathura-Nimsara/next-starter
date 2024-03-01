// Card.js
import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  content: string;
  image: string;
  button: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, content,image,button }) => {
  return (
    <div className="rounded-3xl /*border-4 border-black*/ border-solid  p-4 h-full w-[20rem]  bg-gray-50">  
      <div className="relative rounded-full overflow-hidden h-20 w-20 bg-teal-300">
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-xl p-2" 
        />
      </div>
      <div className="p-4 h-80">
        <h1 className="pt-6 text-xl font-bold mb-2 h-28">{title}</h1>
        <p className="pt-6 text-slate-400 subpixel-antialiased mb-4">{content}</p>
      </div>
      <div className="flex justify-end items-end">
          <div  className="bg-black /*hover:bg-blue-700*/ h-12 w-12  flex items-center justify-center rounded-full">
              <Image 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='rgba(255,255,255,1)'%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z'%3E%3C/path%3E%3C/svg%3E" 
                alt="Button Image"
                width={32}
                height={32}
                className="rounded-full" 
                layout="responsive"
              />
              {button}
          </div>
      </div>
    </div>
  );
};

export default Card;