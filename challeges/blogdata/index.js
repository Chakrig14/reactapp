import {Component} from "react"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class BlogItemDetail extends Component{
    state = {blogData:{},isLoading:true}
    componentDidMount() {
        this.geteachBlogDetails()
    }
    geteachBlogDetails= async () => {
        const {match} = this.props
        const {params} = match
        const {id} = params
        console.log(id)
        const response=await fetch(`https://apis.ccbp.in/blogs/${id}`)
        const data = await response.json()
        console.log(data);
        const updatedBlogCard = {
            title: data.title,
            imageUrl: data.image_url,
            content: data.content,
            avatarUrl: data.avatar_url,
            author: data.author
        }
        this.setState({blogData:updatedBlogCard,isLoading:false})
    }
    renderBlogItem = () => {
        const {blogData} = this.state
        const {title,imageUrl,content,avatarUrl,author} = blogData

        return(
            <div>
                <h1>{title}</h1>
                <img src={avatarUrl} alt={author}/>
                <p>{author}</p>
                <img src={imageUrl} alt={title}/>
                <p>{content}</p>
            </div>
        )
    }
    render(){
        const {isLoading} = this.state
        return(
            <div>
                {isLoading ? (<Loader type="TailSpin" color="#00BFFF" height={50} width={50}/>) : (this.renderBlogItem())}
            </div>
        )
    }
}

export default BlogItemDetail