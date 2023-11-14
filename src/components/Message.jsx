const Message = ({ user, message, classes }) => {
    if (user) {
        return (
            <div className={`${classes} p-2 bg-gray-200 my-2 w-max`}>
                <p>{user} : {message}</p>
            </div>
        )
    } else {
        return (
            <div className={`${classes} p-2 bg-gray-200 my-2 w-max`}>
                <p>You : {message}</p>
            </div>
        )
    }
}

export default Message;