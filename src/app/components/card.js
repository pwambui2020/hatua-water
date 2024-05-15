import Image from "next/image";

const Card = ({ title, description, image }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 border-black">
        <div className="relative rounded-lg overflow-hidden">
        <Image 
        src={image} 
        alt={title} 
        className="rounded-lg" 
        width="400" 
        height= "400"
        objectFit="cover"
        />
        </div>
        
        <h2 className="text-3xl font-bold m-2">{title}</h2>
        <p className="text-xl mt-4">{description}</p>
      </div>
    );
  };
  
export default Card;
  