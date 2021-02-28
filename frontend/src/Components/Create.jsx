import { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import axios from 'axios';
import { TODO_URL } from "./CONSTS.json";

const Create = ({ trigger }) => {

    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [completed, setCompleted] = useState(false);

    const createToDo = async (e) => {
        e.preventDefault(); // stops page from refreshing
        await axios.post(`${TODO_URL}/create`, { description, dueDate, completed })
            .then((res) => {
                console.log(res.data);
                clearForm();
                trigger(res.data);
            }).catch((error) => {
                trigger(error.data);
            })
    }

    const clearForm = () => {
        setDescription('');
        setDueDate('');
        setCompleted(false)
    }


    return (
        <div className="border-right" id="sidebar">
            <Card>
                <CardBody>
                    <CardTitle>Create New ToDo</CardTitle>
                    <form onSubmit={createToDo}>
                        <input type="text"
                            value={description}
                            className="form-control"
                            placeholder="description"
                            onChange={({ target }) => setDescription(target.value)} />
                        <input type="date"
                            value={dueDate}
                            className="form-control"
                            placeholder="due date"
                            onChange={({ target }) => setDueDate(target.value)} />
                        <label>Completed?</label>
                        <input type="checkbox"
                            value={completed}
                            onChange={() => setCompleted(true)} />
                        <br />
                        <button type="submit" className="btn btn-outline-success col-md-12">Create</button>
                    </form>

                </CardBody>
            </Card>
        </div>
    );
}
export default Create;