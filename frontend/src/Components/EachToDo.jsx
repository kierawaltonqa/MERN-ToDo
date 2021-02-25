import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import DeleteToDo from "./DeleteToDo";
import EditToDo from "./EditToDo";


const EachToDo = ({ item, trigger }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{item.description}, due: {item.dueDate}</CardTitle>
                <CardSubtitle>Completed:
                    <input type="checkbox" checked={item.completed} readOnly />
                </CardSubtitle>
                <div className="float-right">
                    <DeleteToDo del={item._id} trigger={trigger} />
                    <EditToDo item={item} trigger={trigger} />
                </div>
            </CardBody>
        </Card>
    )
}
export default EachToDo;