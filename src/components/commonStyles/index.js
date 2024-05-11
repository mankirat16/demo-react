export const commonStyles = {
  blogContainer: {
    margin: "30pt 110pt auto 140pt",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    width: "230pt",
    marginTop: "50pt",
    marginRight: "25pt",
    height: "290pt",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "20px",
    padding: "20pt",
    cursor: "pointer",
  },
  previewImage: {
    borderRadius: "10pt",
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    "&:hover": {},
  },
  outlinedButton: {
    // color: "#0bdbb6",
    // border: "1.5px solid #0bdbb6",
    // border:'1.5px solid #E64833',
    // backgroundColor: "white",
    marginLeft: "15px",
    // "&:hover": {
    //   color: "#0ABE9E",
    //   border: "1.5px solid #0bdbb6",
    //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    // },
  },
  button: {
    // backgroundColor: "#0bdbb6",
    // "&:hover": {
    //   backgroundColor: "#0ABE9E",
    //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    // },
  },
  footer: {
    marginTop:20,
    minHeight: "200px",
    minWidth: "100%",
    backgroundColor: "#141619",
    padding: "30pt 0pt 10pt 0pt",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialIcons: {
    maxHeight:'29pt',
    maxWidth: '29pt',
    margin:'2pt',

  },
};
