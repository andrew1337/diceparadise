import React, {useMemo} from "react";
import useLocalStorage from "../../utils/useLocalStorage";
import "./index.css";

const Results = () => {
    const [users] = useLocalStorage("usernames", []);
    const list = useMemo(() => users.sort((a, b) =>
        (b.dice_1 + b.dice_2 + b.dice_3) - (a.dice_1 + a.dice_2 + a.dice_3)), [users]);

    return (
        <div className="results">
            <div className="table">
                {list.map((user, index) => {
                    const sum = user.dice_1 + user.dice_2 + user.dice_3;
                    const green = list.length === 12 && index < 6 && !!sum;
                    const win = sum === 18;

                    return (
                        <div className={`row ${win && 'win'}`} key={user.id}>
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
                    )
                })}
            </div>
        </div>
    );
};
export default Results;
