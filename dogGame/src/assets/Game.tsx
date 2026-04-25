import { CreateDog } from "./cagnolino";
import { useState } from "react";

export function Game() {
    const [dogs, setDogs] = useState<Number[]>([]);

    function runDog() {
        setDogs(prev => [...prev, prev.length]);
    }

    function restartDog() {
        setDogs([]);
    }

    return (
        <>
            <div className="w-[90%] m-[0_auto] flex gap-[20px] flex-wrap justify-center items-center h-[100vh]" onClick={runDog}>
                {
                    dogs.map(() => {
                        return (
                            <CreateDog />
                        )
                    })
                }
            </div>
            <button onClick={restartDog} className="fixed bottom-[20px] right-[20px] p-[10px] bg-[var(--bg-btn)] border border-[var(--bg-btn)] rounded-[10px] text-[var(--text)]">Riavvia</button>
        </>
    )
}