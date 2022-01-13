import WelcomeComponent from './WelcomeComponent';
import LoremComponent   from './LoremComponent';
import { useUserState } from '../providers/UserProvider';

function UserComponent(props) {
    return (
        <ul>
            <WelcomeComponent greeting={props.surname} />
            <LoremComponent lorem={props.resume} />
        </ul>
    )
}


function UsersComponent() {
    const { items } = useUserState()

    const listItem = items.map(item => {
        return <UserComponent key={item.surname+item.name} surname={item.surname} resume={item.resume} />
    })

    return (
        <div>
            { listItem }
        </div>
    )
}

export default UsersComponent;