import { HeartIcon, FavoriteIcon, UserIcon } from "../assets/svg";

interface GameCardProps {
  data: {
    id: number;
    img: string;
    name: string;
  }[];
  onClick: () => void;
}

export default function GameCard({ data, onClick }: GameCardProps) {
  return (
    <>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className=" relative cursor-pointer hover:-translate-y-2 transition-all ease-in-out duration-500"
            onClick={onClick}
          >
            <div>
              <img src={item.img} alt={item.name} />
            </div>

            <p className="absolute top-[5%] left-[5%] md:hidden bg-[#EA3D17] text-xs font-normal p-2 cursor-pointer rounded-[10px]">
              NEW
            </p>

            {item.name === "Biomutant" && (
              <div className="absolute bg-[#253253] flex items-center gap-2 top-[5%] right-[5%] rounded-[10px] p-2 md:p-3">
                <UserIcon />
                <p className="text-xs">2464</p>
              </div>
            )}

            <div className="bg-[#151C2F] rounded-b-xl flex justify-between items-start px-3 py-5">
              <p className="hidden md:block bg-[#EA3D17] text-xs font-normal p-2 cursor-pointer rounded-[10px]">
                NEW
              </p>
              <div>
                <h2 className="uppercase mb-1 text-sm md:text-lg tracking-widest text-center font-semibold">
                  {item.name}
                </h2>
                {/* Rating stars */}
                <div className="flex gap-x-3">
                  {[...Array(5)].map((_, i) => (
                    <HeartIcon className="size-4" key={i} />
                  ))}
                </div>
              </div>

              <FavoriteIcon />
            </div>
          </div>
        );
      })}
    </>
  );
}
