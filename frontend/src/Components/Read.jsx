import axios from 'axios';
import { Spinner } from 'reactstrap';
import { useState, useEffect } from 'react';
import { TODO_URL } from './CONSTS.json';
import EachToDo from './EachToDo';

//get states from parent class
const Read = ({ message, trigger }) => {

    const [toDoList, setToDoList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`${TODO_URL}/getAll`)
            .then((response) => {
                setIsLoaded(true);
                setToDoList(response.data);
            }).catch((error) => {
                setIsLoaded(true);
                setError(error);
            })
    }, [message]);

    if (error) {
        return <p>{error}</p>
    }
    else if (!isLoaded) {
        return <Spinner animation="border" role="status" />
    }
    else {
        return (
            <div className="row">
                {toDoList.map((item) => (
                    <div className="col-md-12">
                        <EachToDo key={item._id} trigger={trigger} item={item} />
                    </div>
                ))}
            </div>

        )
    }

}
export default Read;