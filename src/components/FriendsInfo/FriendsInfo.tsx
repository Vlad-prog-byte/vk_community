import React, { useState } from "react";
import { User } from "../../interfaces/IGroup";
import FriendCard from "../FriendCard/FriendCard";

interface infoProps {
    friends : User[]
}


const FriendsInfo = ({ friends } : infoProps) => {
    const [flag, setFlag] = useState<boolean>(false);
    return (
        <div>
            <p>Количество друзей: {friends.length}</p>
            {friends.length > 0 ? <button onClick={ () => setFlag(!flag)}>{flag ? "Скрыть": "Показать"}</button> : <></>}
            {flag && friends.map(value => <FriendCard user={value}/>)}
        </div>
    );
}

export default FriendsInfo;