const getAllPosts = () =>{
    return db.query('SELECT * FROM posts');
}

const selectPostById = (postId) =>{
    return db.query('SELECT * FROM posts WHERE id = ?', [postId]);
}


 const selectPostByAuthorId = (authorId) =>{
    return db.query('SELECT * FROM posts WHERE author_id = ?', [authorId])
 }

const insertPost = ({title, description, category, author_id})=>{
    return db.query(
        'INSERT INTO posts (title, description, category, author_id) values(?,?,?,?)', [title, description, category, author_id] )
}

const updatePostById = (postId, {title, description, category, updated_date, author_id }) => {
    return db.query('UPDATE posts SET title=IFNULL(?,title), description=IFNULL(?,description),category=IFNULL(?,category),updated_date=?, author_id=IFNULL(?,author_id)  WHERE id=?',
    [title, description, category,updated_date, author_id, postId])
}

const deletePostById = (postId) => {
    return db.query('DELETE FROM posts WHERE id=?', [postId])
}

module.exports = {getAllPosts, selectPostById, selectPostByAuthorId, insertPost, updatePostById, deletePostById }