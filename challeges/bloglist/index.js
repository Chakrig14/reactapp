import "../bloglist/index.css"
import {Link} from "react-router-dom"

const BlogList = props => {
    const {blogsData} = props
    const {id,imageUrl,avatarUrl,title,author,topic} = blogsData
    return(
        <Link to={`/blogs/${id}`} className="blog-link">
        <div className="blog-card">
                <div>
                    <img src={imageUrl} alt="imageUrl" className="main-image"/>
                </div>
                <div className="content-card">
                    <p className="font">{title}</p>
                    <p className="card-head">{topic}</p>
                    <div className="profile">
                        <img src={avatarUrl} alt="subjectImage" className="profile-pic"/>
                        <p className="font">{author},</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogList