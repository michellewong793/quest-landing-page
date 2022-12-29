const linkStyle = {
  marginRight: 35,
  fontFamily: "Baloo Bhai",
  textDecoration: "none",
  color: "white",
  fontSize: "2rem"
};


const header = {
  padding: "1rem",
  width: "100%",
  height: "1rem",
  color: "white",
};


const Layout = () => {
  return (
    <>
      {" "}
    <div style={header}>
      <a style={linkStyle}>Developers</a>
      <a style={linkStyle}>Mission</a>
  </div>
    </>
  );
};

export default Layout;