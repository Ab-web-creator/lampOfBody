import ProgressBar from "@/components/ui/Progressbar";
import Image from "next/image";
import cardData from "./cardData";  
import Button from "@/components/ui/button/Button";

const Card = ({ cardIndex = 0, progress = 0 }) => {   
  const card = cardData[cardIndex];   

  return (
    <section className='min-w-[290px] w-[290px] h-[640px] border border-gray-300 rounded-sm flex flex-col justify-between'>
      
      <header className='min-h-[44px] border-b border-gray-300 bg-gray-50 px-5 flex rounded-t-sm items-center'>
        <h4 className='text-green-600'>{card.status}</h4> 
      </header>

      <main className="flex-1  flex flex-col justify-between">
        <div className="w-full h-[200px] relative overflow-hidden mb-5">
            <Image
              src={card.imageSrc}   
              alt={card.title}      
              fill
              className="object-cover"
            />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-1 flex flex-col justify-between pb-4">
            <div className="px-5 space-y-2 mb-4">
              <h4>{card.title}</h4> 
              <article>
                <p className="text-gray-500">{card.groupIdentity}</p>
                <p className="text-gray-500">{card.details}</p> 
              </article>
            </div>

            <div className="flex-1 px-5 overflow-y-scroll max-h-[178px]">
              <p>{card.description}</p> 
            </div>
          </div>

          <footer className="flex items-center gap-4 border-t p-4 border-gray-300">
            <Button variant="primary">Read only</Button>
            <ProgressBar progress={progress} />
          </footer>

        </div>
      </main>
    </section>
  )
}

export default Card;
