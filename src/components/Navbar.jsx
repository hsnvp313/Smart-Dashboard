function Navbar() {
    return (
        <div style={styles.nav}>
            <h2>Smart System</h2>
            <span>Admin Panel</span>
        </div>
    );
}

const styles={
    nav:{
        height:"60px",
        backgroundColor:"1f2937",
        color:"white",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0 20px",

    }
};
export default Navbar;