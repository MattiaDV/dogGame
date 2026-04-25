import { CreateDog } from "./cagnolino";
import { useEffect, useState } from "react";

type Dog = {
    x: number;
    y: number;
}

export function Game() {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [counter, setCounter] = useState(0);
    const screenHeight = window.innerHeight - 60;

    function runDog(e: React.MouseEvent) {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();

        const x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        setDogs(prev => [...prev, {x, y}]);
        setCounter(prev => prev + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDogs(prev =>
                prev.map(dog => ({
                    ...dog,
                    y: dog.y <= screenHeight ? dog.y + 10 : dog.y
                }))
            );
        }, 10);

        return () => clearInterval(interval);
    }, []);

    function restartDog() {
        setDogs([]);
        setCounter(0);
    }

    return (
        <>
            <div className="w-[90%] m-[0_auto] relative gap-[20px] h-[100vh]" onClick={runDog}>
                {
                    dogs.map((dog, index) => {
                        return (
                            <CreateDog key={index} x={dog.x} y={dog.y} />
                        )
                    })
                }
            </div>
            <div className="fixed top-[20px] left-[20px]">Cagnolini: {counter}</div>
            <button onClick={restartDog} className="fixed top-[20px] right-[20px] p-[10px] bg-[var(--bg-btn)] border border-[var(--bg-btn)] rounded-[10px] text-[var(--text)]">Riavvia</button>
            <div className="bg-[var(--bg)] w-[100vw] h-[60px] fixed bottom-[0px] left-[0px] z-[-999]"></div>
        </>
    )
}