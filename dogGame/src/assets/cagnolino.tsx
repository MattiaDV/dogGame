import cagnolino from '../img/cagnolino.png';

type Props = {
    x: number;
    y: number;
}

export function CreateDog({x, y}: Props) {
    return (
        <>
            <img 
                className="w-[50px] h-[50px] absolute"
                style={{
                    left: x,
                    top: y,
                    transform: "translate(-50%, -50%)",
                }}
                src={cagnolino}
                />
        </>
    )
}