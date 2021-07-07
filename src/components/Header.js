import PropTypes from 'prop-types'

export const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}


Header.defaultProps={
    title: 'BBetter',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red', 
    backgroundColor: 'black',
}
export default Header