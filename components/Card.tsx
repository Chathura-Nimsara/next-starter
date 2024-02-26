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
    <div className="rounded-3xl border-4 border-black border-solid  p-4 h-full w-80 bg-gray-50">
        
      <div className="relative rounded-full overflow-hidden  h-20 w-20 bg-teal-400">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-xl p-2" />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-slate-400 subpixel-antialiased mb-4">{content}</p>
        <div className="flex justify-end">
        <a href="https://www.figma.com/file/WoirximBPom3gqLmFhpoxK/SusDev-OS?type=design&node-id=323-813&mode=dev" 
            className="bg-black /*hover:bg-blue-700*/ h-14 w-14  flex items-center justify-center rounded-full">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='rgba(255,255,255,1)'%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z'%3E%3C/path%3E%3C/svg%3E" 
            alt="Button Image" className=" w-10 h-10  rounded-full" />
            {button}
        </a>
      </div>
      </div>
    </div>
  );
};

export default Card;