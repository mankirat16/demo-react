// import { Box, Typography, View } from "@mui/material";
// import * as React from "react";
// const styles = {
//   card: {
//     width: "230pt",
//     zIndex: 99,
//     marginTop: "30pt",
//     marginLeft: "20pt",
//     height: "290pt",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     borderRadius: "20px",
//     padding: "20pt",
//     cursor: "pointer",
//   },
//   image: {
//     borderRadius: "10pt",
//     width: "auto",
//     maxWidth: "100%",
//     maxHeight: "48%",
//   },
//   previewText: {
//     marginTop: "10pt",
//     maxHeight: "100%",
//     overflow: "hidden",
//   },
//   previewTitle: {
//     fontWeight: "500",
//     marginTop: 4,
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//     fontFamily: "Poppins, sans-serif",
//   },
// };

// function BlogCard({ blog = {} }) {
//   return (
//     <Box sx={styles.card}>
//       <img src={blog.previewUrl} style={styles.image}/>
//       <Typography variant="h5" sx={styles.previewTitle}>
//         {blog.title}
//       </Typography>
//       <Box sx={styles.previewText}>
//         <Typography variant="body2">{blog.text}</Typography>
//       </Box>
//     </Box>
//   );
// }
// export default BlogCard;

import { Box, Typography } from "@mui/material";
import * as React from "react";

const styles = {
  card: {
    width: "270pt",
    height: "290pt",
    margin: "20pt 10pt 0pt 10pt", // Add margin at the bottom
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "20px",
    padding: "20pt",
    cursor: "pointer",
    transition: "box-shadow 0.3s",
    border: "1px solid #ccc", // Light greyish border
    boxSizing: "border-box", // Ensure border doesn't affect dimensions
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    },
  },
  imageContainer: {
    marginBottom: "10pt",
    transition: "transform 0.5s", // Adding transition for scaling effect
    "&:hover": {
      transform: "scale(1.1)", // Increase scale on hover
    },
  },
  image: {
    borderRadius: "10pt",
    width: "100%",
    height: "auto",
  },
  previewTitle: {
    fontWeight: 500,
    fontSize: "1.3rem",
    fontFamily: "Poppins, sans-serif",
    marginBottom: "8pt",
    lineHeight: 1.3,
    overflow: "hidden",
    textOverflow: "ellipsis",
    // whiteSpace: "nowrap",
  },
  previewText: {
    maxHeight: "90px", // Limiting the height to two lines of text
    overflow: "hidden",
    lineHeight: 1.4,
  },
};

function BlogCard({ blog = {} }) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.imageContainer}>
        <img src={blog.previewUrl} alt="Blog Preview" style={styles.image}/>
      </Box>
      <Typography variant="h6" sx={styles.previewTitle}>
        {blog.title}
      </Typography>
      <Typography variant="body1" sx={styles.previewText}>
        {blog.text}
      </Typography>
    </Box>
  );
}

export default BlogCard;

