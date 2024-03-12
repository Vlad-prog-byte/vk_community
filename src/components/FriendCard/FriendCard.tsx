import { User } from "../../interfaces/IGroup";

interface friendCardProps {
    user: User
}

const FriendCard = ({user}: friendCardProps) => {
    return (
        <div>
            <p>{ user.first_name } { user.last_name }</p>
        </div>
    );
}

export default FriendCard;