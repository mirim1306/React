export default function TodoHeader(props){
    const {title}=props;
    return(
        <h1 className="todo__title">{title || "HyeonDo List"}</h1>
    )
}