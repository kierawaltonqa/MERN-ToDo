import axios from "axios";
import { CardLink } from "reactstrap";
import { TODO_URL } from './CONSTS.json';

const DeleteToDo = ({ del, trigger }) => {

    const deleteToDo = (e) => {
        e.preventDefault();
        axios.delete(`${TODO_URL}/delete/${del}`)
            .then((response) => {
                trigger(`successfully deleted!`);
            })
            .catch((error) => {
                trigger(`error deleting the ToDo`)
            })

    }

    return (
        <CardLink className="btn btn-outline-danger" onClick={deleteToDo}>X </CardLink>
    )
}
export default DeleteToDo;