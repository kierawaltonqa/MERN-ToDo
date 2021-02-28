import { useState } from 'react';
import Create from './Create';
import Read from './Read';

const HomePage = () => {

    const [message, setMessage] = useState('');

    const trigger = (data) => {
        setMessage(data);
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Create trigger={trigger} />
            </div>
            <div className="container">
                <div className="col-md-9">
                    <div className="alert alert-success">{message}</div>
                    <Read message={message} trigger={trigger} />
                </div>
            </div>
        </div>
    )
}
export default HomePage;