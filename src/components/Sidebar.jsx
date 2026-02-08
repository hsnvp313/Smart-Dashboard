function Sidebar({setpage}){
    return(
        <div style={styles.sidebar}>
            <button onClick={()=>setpage("dashboard")}>Home</button>
            <button onClick={()=>setpage("products")}>Settings</button>
            <button onClick={()=>setpage("orders")}>Profile</button>
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