import WelcomeComponent from './WelcomeComponent';
import LoremComponent   from './LoremComponent';
import { useUserState } from '../providers/UserProvider';

function CharacterComponent(props) {
    return (
        <ul className='character-item'>
            <WelcomeComponent greeting={props.surname} />
            <LoremComponent lorem={props.resume} />
        </ul>
    )
}

function CharactersComponent() {
    const { items } = useUserState()

    const listItem = items.map(item => {
        return <CharacterComponent 
            key={item.surname+item.name} 
            surname={item.surname} 
            resume={item.resume} 
        />
    })

    return (
        <div id='characters-list'>
            { listItem }
        </div>
    )
}

export default CharactersComponent;