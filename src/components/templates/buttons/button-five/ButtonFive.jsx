import './ButtonFive.css';

export default function ButtonFive(props) {

    return (
        <div className="Button-five-container">
                <button className="button-five">
                    {props.name}
                </button>
        </div>
    )

}