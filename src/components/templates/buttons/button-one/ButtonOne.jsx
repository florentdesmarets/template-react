import './ButtonOne.css';

export default function ButtonOne(props) {

    return (
        <div className="Button-one-container">
                <button className="button-one">
                    {props.name}
                </button>
        </div>
    )

}