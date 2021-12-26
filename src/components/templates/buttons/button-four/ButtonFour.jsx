import './ButtonFour.css';

export default function ButtonFour(props) {

    return (
        <div className="Button-four-container">
                <button className="button-four">
                    {props.name}
                </button>
        </div>
    )

}