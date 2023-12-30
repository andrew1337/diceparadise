"use client";

import React from "react";
import { defaultPrizes } from "../page";
import "./index.css";

export const Prizes = ({ prizes, setPrizes }) => {
    const handleUpdatePrizes = (value, index) => setPrizes(
        prizes.map((prize, i) => i === index ? Number(value) : prize)
    )
    const resetPrizes = () => setPrizes(defaultPrizes);

    return (
        <>
            <div className="prizes">
                {prizes.map((prize, index) => (
                    <div key={index} className='prizes-row'>
                        <div>Prize #{index + 1}</div>
                        <input
                            type="number"
                            className="prize-input"
                            value={prize || undefined}
                            onChange={(event) => handleUpdatePrizes(event.target.value, index)}
                            placeholder="Enter GEL amount"
                        />
                    </div>
                ))}
                <button
                    className="reset"
                    type='button'
                    onClick={resetPrizes}
                >
                    Reset prizes
                </button>
            </div>
        </>
    );
};
