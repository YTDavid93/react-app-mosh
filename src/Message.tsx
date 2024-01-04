// Pascal casing
// whenever we want to create a function component we follow pascal casing
function Message() {
    // JSX: Javascript XML 
    const name = 'David ';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>
}

export default Message;