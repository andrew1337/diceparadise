"use client";

import React from "react";
import "./index.css";

export const UserNames = ({ usernames, setUsers, resetDices, resetAll }) => {
    const handleUserInput = (value, current) => setUsers(
        usernames.map(user => (user.id === current ? {...user, name: value} : user)),
    );

    const handleUpdateScore = (value, current, index) => {
        // if (!value) {
        //     return;
        // }
        // if (value < 3 || value > 18) {
        //     // empty current input 
        //     value = "";
        //     return;
        // }
        setUsers(
        usernames.map(user => (user.id === current ?
                {...user, [index]: Number(value)} :
                user))
        );
    };

    return (
        <>
            <div className="usernames">
                {usernames.map(user => (
                    <div key={user.id} className='usernames-row'>
                        <div>Player {user.id + 1}</div>
                        <input
                            type="text"
                            className="usernames-input"
                            value={user.name}
                            onChange={(event) => handleUserInput(event.target.value, user.id)}
                            placeholder="Enter player name"
                        />
                        <div>Primary roll</div>
                        <input
                            type='number'
                            min={3}
                            max={18}
                            value={user.primary_roll || undefined}
                            onChange={event => handleUpdateScore(event.target.value, user.id, 'primary_roll')}
                        />
                        <div>Optional roll</div>
                        <input
                            type='number'
                            min={3}
                            max={18}
                            value={user.optional_roll || undefined}
                            onChange={event => handleUpdateScore(event.target.value, user.id, 'optional_roll')}
                        />
                        {/* <input
                            type='number'
                            min={1}
                            max={6}
                            value={user.dice_3 || undefined}
                            onChange={event => handleUpdateScore(event.target.value, user.id, 'dice_3')}
                        /> */}
                    </div>
                ))}
            </div>
            <button
                className="reset"
                type='button'
                onClick={resetDices}
            >
                Reset dices
            </button>
            <button
                className="reset all"
                type="button"
                onClick={resetAll}
            >
                Reset Players
            </button>
        </>
    );
};
