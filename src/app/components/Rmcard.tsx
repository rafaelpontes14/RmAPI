import { Character } from '@/types/character'

export interface Props {
    character: Character
}

export default function Rmcard(props: Props) {
    const character = props.character;
    return (
<div
        className="product-card w-[320px] h-[320px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-[#001E04] flex flex-col items-center justify-center gap-3 transition-all duration-300 group hover:scale-105"
        >
        <div
            className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150"
        >
            <div className="flex gap-1">
            <svg
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1"
                fill="none"
                viewBox="0 0 24 24"
                className="fill-[#60E901] rotate-[24deg]"
                height="200"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                ></polygon>
            </svg>
            </div>
        </div>
        <div
            className="absolute rounded-full bg-[#1EA73F] z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"
        ></div>
        <div className="para uppercase text-center leading-none z-40">
            <p className="font-bold text-xl tracking-wider text-[#00B3CC]">{character.name}</p>
        </div>
        <div className="img w-[180px] aspect-square bg-gray-100 z-40 rounded-2xl">
            <img 
            className='rounded-2xl shadow-2xl shadow-black/80'
            src={character.image}
            width={200}
            height= {200}
            alt={character.name}/>
        </div>
        <div className="btm-_container z-40 flex justify-between items-center gap-10 mt-3">
                <p className="font-bold text-xl text-[#001E04]">{character.gender}</p>
                <p className="font-bold text-xl text-[#001E04]">{character.species}</p>
        </div>
    </div>
    )
}