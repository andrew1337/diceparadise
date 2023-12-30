import React, {Fragment, useEffect, useMemo, useRef, useState} from "react";
import useLocalStorage from "../../utils/useLocalStorage";
import "./index.css";

const Results = () => {
    const $box = useRef(null);
    const $prev = useRef(null);
    const [boxHeight, setHeight] = useState(0);

    const [users] = useLocalStorage("usernames", []);

    const sorted = useMemo(() => users.sort((a, b) =>
        (b.dice_1 + b.dice_2 + b.dice_3) - (a.dice_1 + a.dice_2 + a.dice_3)), [users]);

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
                {users.map(user => {
                    const sum = user.dice_1 + user.dice_2 + user.dice_3;
                    const index = sorted.findIndex(item => item.id === user.id)

                    const green = users.length === 12 && index < 6 && !!sum;
                    const win = sum === 18;


                    return (
                        <Fragment key={user.id}>
                            <div className='row invisible'/>
                            <div
                                className={`row ${win && 'win'}`}
                                style={{top: boxHeight / users.length * index}}
                            >
                                <div className='name'>{user.name}</div>
                                <div className={`count ${green && 'green'}`}>
                                    {user.dice_1 || '-'}
                                </div>
                                <div className={`count ${green && 'green'}`}>
                                    {user.dice_2 || '-'}
                                </div>
                                <div className={`count ${green && 'green'}`}>
                                    {user.dice_3 || '-'}
                                </div>
                                <div className={`count sum ${green && 'green'}`}>{sum}</div>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    );
};
export default Results;
