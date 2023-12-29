import React, {useMemo} from "react";
import "./index.css";
import useLocalStorage from "../../utils/useLocalStorage";

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
                    return (
                        <div className="row" key={user.id}>
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
