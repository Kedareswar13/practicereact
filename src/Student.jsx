import PropTypes from 'prop-types'
function Student(props)
{
    return(
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Major : {props.age > 18 ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes =
{
    name: PropTypes.string,
    age: PropTypes.number,
}
export default Student