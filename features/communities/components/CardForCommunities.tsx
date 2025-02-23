import Image from "next/image";
import cardData from "./cardData";  
import Button from "@/components/ui/button/Button";

const CardForCommunities = ({ cardIndex = 0 }) => {   
  const card = cardData[cardIndex];   

  return (
    <section className='min-w-[290px] w-[290px] h-fit border border-gray-300 rounded-sm flex flex-col justify-between'>
         <div className="w-full h-[150px] relative rounded-t-sm overflow-hidden mb-5">
            <Image
              src={card.imageSrc}   
              alt={card.title}      
              fill
              className="object-cover "
            />
          </div>

      <main className="px-4 flex-1 space-y-5 justify-between flex flex-col mb-4">

       <div className="">
        <p className="text-gray-500">
          Group name:
        </p>
        <p className="text-lg font-bold mb-2">{card.title}</p> 
     
        <p className="text-gray-500">
            Created by: </p> 
          <p className='text-gray-500 font-bold'>{card.name} </p> 
        </div>


        <div className="">
          <p className="text-gray-500 ">
            Description: 
          </p>
          <div className="overflow-y-auto max-h-[110px]">
            <p >{card.description}</p> 
          </div>
        </div>

      </main>
      <footer className="mt-2 bg-gray-50 border-t border-gray-300 flex justify-center p-4 rounded-b-sm">
          <Button className="w-1/2 self-center">Enter</Button>
        </footer>

    </section>
  )
}

export default CardForCommunities;
