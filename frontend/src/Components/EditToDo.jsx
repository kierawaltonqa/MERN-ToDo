import axios from 'axios';
import { TODO_URL } from './CONSTS.json';
import { CardLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';

const EditToDo = ({ item, trigger }) => {

    const { description, dueDate, completed } = item;
    const [updateDescription, setUDescription] = useState(description);
    const [updateDueDate, setUDueDate] = useState(dueDate);
    const [updateCompleted, setUCompleted] = useState(completed);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const updateToDo = (e) => {
        e.preventDefault();
        axios.patch(`${TODO_URL}/update/${item._id}`,
            { description: updateDescription, dueDate: updateDueDate, completed: updateCompleted })
            .then((response) => {
                toggle();
                trigger(response.data);

            })
            .catch((error) => {
                trigger(error.data)
            })
    }

    return (
        <>
            <CardLink className="btn btn-outline-warning" onClick={toggle}>Edit </CardLink>
            <Modal isOpen={modal}>
                <ModalHeader>{item.description}</ModalHeader>
                <form onSubmit={updateToDo}>
                    <ModalBody>
                        <input type="text"
                            value={updateDescription}
                            className="form-control"
                            placeholder="description"
                            onChange={({ target }) => setUDescription(target.value)} />
                        <input type="date"
                            value={updateDueDate}
                            className="form-control"
                            placeholder="due date"
                            onChange={({ target }) => setUDueDate(target.value)} />
                        <label>Completed?</label>
                        <input type="checkbox"
                            // defaultChecked={updateCompleted}
                            onChange={() => setUCompleted(!updateCompleted)}

                            value={updateCompleted} />
                        {/* onClick={() => setUCompleted(true)} /> */}
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={() => toggle} className="btn btn-outline-danger">Cancel</button>
                        <button onSubmit={updateToDo} type="submit" className="btn btn-outline-success">Update</button>
                    </ModalFooter>
                </form>
            </Modal>
        </>
    )


}
export default EditToDo;