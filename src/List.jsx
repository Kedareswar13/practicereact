function List(props)
{
    const category = props.category;
    const itemlist = props.items;
    const listitems = itemlist.map( item => <li key={item.id}>{item.name} : &nbsp; <b>{item.calories}</b></li>);
    return (<><h3>The list Items are {category}</h3><ul>{listitems}</ul></>);
}
export default List;
/*
function List()
{
    const fruits = [{id : 1, name : "apple", calories: 95},
                    {id : 2, name : "orange", calories : 45},
                    {id : 3, name : "banana", calories : 105},
                    {id : 4, name : "coconut", calories : 159},
                    {id : 5, name : "pineapple", calories : 37},
                ];

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    //fruits.sort((a,b) => a.calories - b.calories); //NUMERIC
    //fruits.sort((a,b) => b.calories - a.calories); //REVERSE NUMERIC
    
    //const Highcalfruits = fruits.filter(fruit => fruit.calories >= 100);
    const listitems = fruits.map( fruit => <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li>);
    return (<ul>{listitems}</ul>);
}
export default List;
*/