"use client";

import React, {useCallback, useEffect, useState} from "react";
import useLocalStorage from "../utils/useLocalStorage";
import {UserNames} from "./users-table";

const defaultUser = {
    id: 0,
    name: '',
    dice_1: 0,
    dice_2: 0,
    dice_3: 0,
    sum: 0
};

const Controls = () => {
    const onLoad = typeof window !== "undefined" && JSON.parse(window.localStorage?.getItem('usernames'));
    const [count, setCount] = useState(onLoad?.length);
    const [usernames, setUsers] = useLocalStorage("usernames", onLoad || []);

    const handleResetDices = () => {
        setUsers(
            usernames
                .map(user => ({
                    ...user,
                    dice_1: 0,
                    dice_2: 0,
                    dice_3: 0
                }))
                .sort((a, b) => a.id - b.id)
        )
    }

    const handleReset = useCallback(() => {
        setCount(undefined);
        setUsers([]);
    }, []);

    const updateList = () => {
        let list = [];

        if (usernames.length < count) {
            for (let i = 0; i < count; i++) {
                list.push({...defaultUser, id: i})
            }
        } else {
            list = usernames
                .sort((a, b) =>
                    (b.dice_1 + b.dice_2 + b.dice_3) - (a.dice_1 + a.dice_2 + a.dice_3))
                .slice(0, count)
        }

        setUsers(list)
    };

    useEffect(() => {
        updateList();
    }, [count]);

    return (
        <div className="controls">
            <div className='count'>
                Start count of users:
                <div className='countItem'>
                    <input type="radio" name="count" id='12' value={12} checked={count === 12}
                           onChange={() => setCount(12)}/>
                    <label htmlFor="12">12</label>
                </div>
                <div className='countItem'>
                    <input type="radio" name="count" id='6' value={6} checked={count === 6}
                           onChange={() => setCount(6)}/>
                    <label htmlFor='6'>6</label>
                </div>
            </div>

            {count && (
                <UserNames
                    usernames={usernames}
                    setUsers={setUsers}
                    resetDices={handleResetDices}
                    resetAll={handleReset}
                />
            )}
        </div>
    );
};

export default Controls;
