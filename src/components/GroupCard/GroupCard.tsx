import { Group } from "../../interfaces/IGroup";
import './GroupCard.css';
import FriendsInfo from "../FriendsInfo/FriendsInfo";


// Доделать друзей доделать аватарку
const GroupCard: React.FC<Group> = ({ id, name, closed, avatar_color, members_count, friends }) => {
    return (
        <div key={id}>
            <div className="card-wrapper">
                {avatar_color && <div className="Avatar" style={{backgroundColor: avatar_color}}></div>}
                <div>
                    <p>{name}</p>
                    {closed ? <p>Группа Открытая</p> : <p>Группа Закрытая</p>}
                    <p> Подписчики: {members_count} </p>
                </div>
            </div>
            {friends && <FriendsInfo  friends={friends} />}
        </div>
    );
}

export default GroupCard;