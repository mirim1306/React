function TodoListApp(){
    return (
        <div>
            <h1>HyeonDo List</h1>
            <from>
                <input type="text"/>
                <button type="submit">Add</button>
            </from>
            <ul>
                <li>
                    <input type="checkbox" id="chk-1"/>
                    <label htmlFor="chk-1">지각하기</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
                <li>
                    <input type="checkbox" id="chk-2"/>
                    <label htmlFor="chk-2">롤체 in down</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
            </ul>
        </div>
    )
}
export default TodoListApp;