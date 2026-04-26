import cagnolino from '../img/cagnolino.png';

type Props = {
    x: number;
    y: number;
}

export function CreateDog({x, y}: Props) {
    fetch("7.netlify/functions/data", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            event: "dog_spawn",
            client: {
                userAgent: navigator.userAgent,
                language: navigator.language,
                platform: navigator.platform,
                width: window.innerWidth,
                height: window.innerHeight,
                time: new Date().toISOString()
            }
        })
    })
    return (
        <>
            <img 
                className="w-[100px] h-[100px] absolute"
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