import './Filter.scss';

function Filter(props) {
    return (
        <div className="Filter">
            <div className="Filter__Name">
                {props.name}
            </div>
            <div className="Filter__Close">
                X
            </div>
        </div>
    )
}

export default Filter