function Sidebar({setPage}){
    return(
        <div style={styles.sidebar}>
            <button onClick={()=>setPage("dashboard")}>Dashboard</button>
            <button onClick={()=>setPage("products")}>Products</button>
            <button onClick={()=>setPage("orders")}>Orders</button>
        </div>
    )

}
const styles={
    sidebar:{
        width:"200px",
        backgroundColor:"#111827",
        color:"white",
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        padding:"20px",
    }
};
export default Sidebar;