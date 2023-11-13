
const getAllAuthors = () =>{
    return db.query('SELECT * FROM authors');
}

 const selectAuthorById = (authorId) =>{
    return db.query('SELECT * FROM authors WHERE id = ?', [authorId])
 }
 const selectAuthorsByPage = (page, limit) =>{
    return db.query('SELECT * FROM authors limit ? offset ?' , [limit, (page-1) * limit]);
 }

const insertAuthor = ({name, email, image})=>{
    return db.query(
        'INSERT INTO authors (name, email, image) values(?,?,?)', [name, email, image] )
}

const updateAuthorById = (authorId, {name, email, image}) => {
    return db.query('UPDATE authors SET name=IFNULL(?,name), email=IFNULL(?,email), image=IFNULL(?,image) WHERE id=?',
    [name, email, image, authorId]    )
}

const deleteAuthorById = (authorId) => {
    return db.query('DELETE FROM authors WHERE id=?', [authorId])
}

module.exports = {getAllAuthors, selectAuthorById, insertAuthor, updateAuthorById, deleteAuthorById, selectAuthorsByPage }