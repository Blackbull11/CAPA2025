const Book = ({ cover, className}) => {
    return(
        <>
        <div className={`book ${className}`}>
            <div style={{backgroundImage: `url(${cover}`}} className="book-cover">
                <div className="effect" />
                <div className="light" />
            </div>
            <div className="book-inside" />
        </div>
        </>
    );
}

export default Book;