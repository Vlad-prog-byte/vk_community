import React, { useEffect, useState } from "react";
import GroupCard from "../GroupCard/GroupCard";
import { getGroups } from "../../fetches/groupFetches";
import { Group } from "../../interfaces/IGroup";
import "./GroupsPage.css";


 // let result: Group[] = (() => {
        //         if (closed === true)
        //             return data.filter(value => value.closed === true);
        //         else if (closed === false)
        //             return data.filter(value => value.closed === false);
        //         else
        //             return data;
        // })();

        // result = (() => {
        //         if (isFriends === true)
        //             return result.filter(value => 'friends' in value && value.friends?.length > 0);
        //         else if (isFriends === false)
        //             return result.filter(value => value.closed === false);
        //         else
        //             return data;
        // })();


const GroupPage = () => {
    const [flag, setFlag] = useState<boolean>(false);
    const [groups, setGroups] = useState<Group[]>([]);

    const [closed, setClosed] = useState<boolean | undefined>(undefined);
    const [isFriends, setIsFriends] = useState<boolean | undefined>(undefined)
    const [colors, setColors] = useState<Array<string>>(['Неважно']);
    const [color, setColor] = useState<string>('Неважно');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function  filterData(data: Group[], closed: boolean | undefined, isFriends: boolean | undefined, color: string): Group[] {
            if (closed === true)
                data = data.filter(value => value.closed === true);
            else if (closed === false)
                data = data.filter(value => value.closed === false);


            if (isFriends === true)
                data = data.filter(value => {
                    if ('friends' in value && Array.isArray(value.friends)) {
                        if (value.friends.length > 0)
                            return value;
                    }
            })
            else if (isFriends === false)
            data = data.filter(value => {
                if (!( 'friends' in value) || !Array.isArray(value.friends))
                    return value;
                if ('friends' in value && Array.isArray(value.friends)) {
                    if (value.friends.length === 0)
                        return value;
                }
            })    

            
            if (color !== 'Неважно')
                data = data.filter((value) => {
                    if ('avatar_color' in value && value.avatar_color === color)
                        return value;
                })
            return data;
       
    }
    useEffect(() => {
        (async () => {
            try {
                await getGroups()
                .then(response => {
                    if (response.result === 0 || !('data' in response))
                        setFlag(true);
                    else {
                        if (response.data === undefined)
                            setGroups([])
                        else {
                            let newColors: Array<string> = [];
                            response.data.forEach(value => {
                                if ('avatar_color' in value && value.avatar_color !== undefined)
                                    newColors.push(value.avatar_color);
                            })
                            setColors(['Неважно', ...newColors]);
                            setGroups(filterData(response.data, closed, isFriends, color));
                            setIsLoading(true);
                        }

                    }
                });
            }
            catch(e) {
                setFlag(true);
            }
        })()
    }, [closed, isFriends, color]);


    function changeSelect(event:  React.ChangeEvent<HTMLSelectElement>, fSet: React.Dispatch<React.SetStateAction<boolean | undefined>>) {
        let value = event.target.value;
        if (value == String(undefined))
            fSet(undefined);
        else if (value === String(true))
            fSet(true)
        else
            fSet(false)
    }
    
    if (flag)
        return <h1>Error</h1>;

    return (
        <div>
            {isLoading ? (
                <div>
                    <div style={{ margin: "0px 0px 50px 100px"}}>
                        <div>
                            <span>Группа: </span>
                            <select  onChange={(e) => changeSelect(e, setClosed)}>
                                <option value={'undefined'}>Любая</option>
                                <option value={'false'}>Закртая</option>
                                <option value={'true'}>Открытая</option>
                            </select>
                        </div>
                        <div>
                            <span>Друзья: </span>
                            <select  onChange={(e) => changeSelect(e, setIsFriends)}>
                                <option value={'undefined'}>Неважно</option>
                                <option value={'true'}>Есть</option>
                                <option value={'false'}>Отсутствует</option>
                            </select>
                        </div>

                        <div>
                            <span>Цвет аватарки: </span>
                            <select  onChange={(e) => setColor(e.target.value)}>
                                {colors.map(value => <option value={value}>{value}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="GroupsPageWrapper">
                        {groups && groups.map((value) => {
                            return <GroupCard {...value}/>
                        })}
                    </div>
                </div>
            ): (<div>Загрузка...</div>)}
        </div>
    );
}

export default GroupPage;