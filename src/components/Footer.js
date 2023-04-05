import React from 'react'

const Footer = () => {
  let myStyle= {
    backgroundColor: "#504e4e",
    padding: "5px",    
    textAlign: "right",
    color: "white",
    fontWeight: "700",    
  }
  return (
    <footer style={myStyle} className="fixed-bottom">
        Copywright &copy; Debojit Saha
    </footer>
  )
}

export default Footer
