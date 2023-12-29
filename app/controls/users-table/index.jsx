import React from "react";
import "./index.css";

export const UserNames = ({ usernames, setUsers, resetDices, resetAll }) => {
    const handleUserInput = (value, current) => setUsers(
        usernames.map(user => (user.id === current ? {...user, name: value} : user)),
    );

    const handleUpdateScore = (value, current, index) => setUsers(
        usernames.map(user => (user.id === current ?
                {...user, [index]: Number(value)} :
                user))
    );

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
                        <div>Dices</div>
                        <input
                            type='number'
                            min={1}
                            max={6}
                            value={user.dice_1 || undefined}
                            onChange={event => handleUpdateScore(event.target.value, user.id, 'dice_1')}
                        />
                        <input
                            type='number'
                            min={1}
                            max={6}
                            value={user.dice_2 || undefined}
                            onChange={event => handleUpdateScore(event.target.value, user.id, 'dice_2')}
                        />
                        <input
                            type='number'
                            min={1}
                            max={6}
                            value={user.dice_3 || undefined}
                            onChange={event => handleUpdateScore(event.target.value, user.id, 'dice_3')}
                        />
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
