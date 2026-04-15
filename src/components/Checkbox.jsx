export default function Checkbox(props) {
    const { id, children } = props;
    return (
        <>
            <input type="checkbox" id={`chk-${id}`} className="todo__check" />
            <label htmlFor={`chk-${id}`} className="todo__label">{children}</label>
        </>
    )
}