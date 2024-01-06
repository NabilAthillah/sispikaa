import Image from "next/image";

const Card = ({
  image,
  name,
  nrp,
}) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="border-[1px] border-[#D9D9D9]">
        <Image
          src={`/assets/${image}.png`}
          alt="Our Team"
          width={245}
          height={293}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[#8] font-medium text-[24px] text-center">{name}</p>
        <p className="text-[#8] text-[16px] text-center">{nrp}</p>
      </div>
    </div>
  );
};

export default Card;
