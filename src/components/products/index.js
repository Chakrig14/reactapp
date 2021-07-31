import {Component} from "react"
import Cookies from "js-cookie"
import ProductCard from "../productcard/index"
import "../products/index.css"
import Loader from "react-loader-spinner"
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Products extends Component{
    state = {productList:[],isLoading:true}
    componentDidMount= () => {
        this.renderProductList()
    }
    renderProductList = async ()=> {
        const url = "https://apis.ccbp.in/products";
        const jwtToken = Cookies.get("jwt_token")
        const options = {
            headers:{
                Authorization: `Bearer ${jwtToken}`
            },
            method:"GET"
        }
        const response= await fetch(url,options);
        if(response.ok===true){
            const data = await response.json()
            const fetchedData = data.products.map(eachItem => ({
                id : eachItem.id,
                brand:eachItem.brand,
                imageUrl: eachItem.image_url,
                price:eachItem.price,
                rating: eachItem.rating,
                title:eachItem.title
            }))
        this.setState({productList:fetchedData,isLoading:false})
        }
    }
    render(){
        const {productList,isLoading} = this.state
        return(
            <div>
                <h1>All Products</h1>
                {isLoading ? (<div className="loader">
                    <Loader type="Circles" color="black" height={50} width={50}/>
                </div>) : (<div className="product-card">
                {productList.map(eachItem => (<ProductCard key={eachItem.id} productDetails={eachItem}/>))}
                </div>)}
            </div>
        )
    }
}

export default Products