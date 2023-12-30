"use client";

import React, {useCallback, useEffect, useState} from "react";
import useLocalStorage from "../utils/useLocalStorage";
import {UserNames} from "./users-table";
import {Prizes} from "./prizes-table";

const defaultUser = {
    id: 0,
    name: '',
    primary_roll: 0,
    optional_roll: 0,
};

const defaultPrizes = [0, 0, 0, 0, 0, 0];

const Controls = () => {
    const onLoad = typeof window !== "undefined" && JSON.parse(window.localStorage?.getItem('users'));
    const [count, acrualsetCount] = useState(onLoad?.length);
    const [usernames, setUsers] = useLocalStorage("users", onLoad || []);
    const [prizes, setPrizes] = useLocalStorage("prizes", defaultPrizes);

    const setCount = (value) => {
        acrualsetCount(value);
    }

    const handleResetDices = () => {
        setUsers(
            usernames
                .map(user => ({
                    ...user,
                    primary_roll: 0,
                    optional_roll: 0,
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
                .sort((a, b) => b.primary_roll - a.primary_roll || b.optional_roll - a.optional_roll)
                .slice(0, count)
        }

        setUsers(list)
    };

    useEffect(() => {
        updateList();
    }, [count]);

    return (
        <div className="controls">
            <div>
            <div className='count'>
                Start count of users:
                <div className='item'>
                    <input type="radio" name="count" id='12' value={12} checked={count === 12}
                           onChange={() => setCount(12)}/>
                    <label htmlFor="12">12</label>
                </div>
                <div className='item'>
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
            {count === 6 && (
                <Prizes
                    prizes={prizes}
                    setPrizes={setPrizes}
                />
            )}
        </div>
    );
};

export default Controls;
