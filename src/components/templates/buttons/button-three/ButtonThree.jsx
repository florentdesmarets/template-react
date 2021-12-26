import './ButtonThree.css';

export default function ButtonThree(props) {

    return (
        <div className="Button-three-container">
                <button className="button-three">
                    {props.name}
                </button>
        </div>
    )

}