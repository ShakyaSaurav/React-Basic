const Greet= (props)=>{
    console.log(props)
    return (
        <div> <h1>Hello {props.name} aka {props.heroName}</h1>
    {props.children}
    </div>
)
}

export default Greet;