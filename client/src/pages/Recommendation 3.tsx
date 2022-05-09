import Button from "@mui/material/Button";


function Recommendation() {
    return (
        <>
            <br/>
            <div className = "button">
                <Button variant = "contained" size={"large"} style={{
                    borderRadius: 20,
                    backgroundColor: "#5A9B85",
                    padding: "18px 36px",
                    fontSize: "18px",
                    fontFamily: "Roboto"
                }}>
                    Find a mountain
                </Button>
            </div>
        </>
    );
}

export default Recommendation;
