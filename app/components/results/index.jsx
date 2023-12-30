import React, {Fragment, useEffect, useMemo, useRef, useState} from "react";
import useLocalStorage from "../../utils/useLocalStorage";
import "./index.css";

const Results = () => {
    const $box = useRef(null);
    const $prev = useRef(null);
    const [boxHeight, setHeight] = useState(0);

    const [users] = useLocalStorage("users", []);
    const [prizes] = useLocalStorage("prizes", []);

    const sorted = useMemo(() => users
    .sort((a, b) => b.primary_roll - a.primary_roll || b.optional_roll - a.optional_roll),
    [users]);

    useEffect(() => {
        if (users.length !== $prev.current) {
            const { height} = $box.current.getBoundingClientRect();
            setHeight(height);
            $prev.current = users.length;
        }
    }, [users]);

    return (
        <div className="results">
            <div className="table" ref={$box}>
                {users.map((user, i) => {
                    const index = sorted.findIndex(item => item.id === user.id)

                    const green = users.length === 12 && index < 6 && !!user.primary_roll;
                    const win = user.primary_roll === 18 || user.optional_roll === 18;
                    const withPrize = users.length === 6 && !!prizes;

                    return (
                        <Fragment key={user.id}>
                            <div className='row invisible'/>
                            <div
                                className={`row ${win && 'win'}`}
                                style={{top: boxHeight / users.length * index}}
                            >
                                <div className='name'>{user.name}</div>
                                <div className={`count ${green && 'green'}`}>
                                    {win ? "Jackpot" : i + 1}
                                </div>
                                {console.log(prizes)}
                                <div className={`count sum ${green && 'green'}`}>{user.primary_roll}</div>
                                <div className={`count sum ${green && 'green'}`}>{user.optional_roll}</div>
                                <div className="prize">{withPrize && prizes[i] > 0 && prizes[i] + ' Gel'}</div>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    );
};
export default Results;
