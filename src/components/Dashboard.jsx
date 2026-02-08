function Dashboard(){
    return(
        <div>
            <h2>Dashboard</h2>
            <div style={{display:"flex", gap:"20px",marginTop:"20px"}}>
                <Card title="Orders" value="120" />
                <Card title="Rvenue" value="AED 15,000" />
                <Card title="Users" value="45" />
            </div>
        </div>
    );
}
function Card({title,value}){
    return(
        <div style={{
            background:"#f3f4f6",
            padding:"20px",
            borderRadius:"8px",
            minWidth:"150px",
        }}>
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    );
}
export default Dashboard;
