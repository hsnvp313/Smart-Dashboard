import {useState,useEffect} from "react";

function Products(){
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then((data)=>{
            setProducts(data);
            setLoading(false);
        })
        .catch(()=>{
            setError("Failed to load products");
            setLoading(false);
        });
    },[]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <div>
            <h2>Products</h2>

            <div style={styles.grid}>
                {products.map((product)=>(
                    <div key={product.id} style={styles.card}>
                        <img src={product.image} alt={product.title} style={styles.image} />
                        <h3>{product.title}</h3>
                        <p>AED{product.price}</p>
                    </div>
                ))}
            </div>
            </div>
            );
}

const styles={
    grid:{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",
        gap:"20px",
        marginTop:"20px"
    },
    card:{
        background:"#f9fafb",
        padding:"15px",
        borderRadius:"8px",
        border:"1px solid #e5e7eb",
        textAlign:"center",
    },
    image:{
        height:"120px",
        objectFit:"contain",
        marginBottom:"10px",
    }};
export default Products;