import { Link } from 'react-router-dom';

const List = () => {
    return (
        <div className = "About">
            <p>
                Chat-N-Draw is a drawing game.  Join the room and log-in to chat.  Choose a drawer.  The drawer submits an answer on the top right input, then start drawing.
                Everyone in the room can see and guess the image in the chat.  First person to guess correctly wins (winner declared on the top right).
                Click <Link to="/">Here</Link> to play.
 to play
            </p>
        </div>
    )
}

export default List