import { Typography, Box } from "@mui/material";
import * as React from "react";
import BlogCard from "../commonStyles/BlogCard";
import Divider from "@mui/material/Divider";
import { AllBlogs } from "../../utils";
import Footer from "../ui/Footer";
export const styles = {
  heading: {
    marginTop: "70pt",
    marginBottom: "10pt",
    fontSize: "16pt",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "11%",
    marginRight: "11%",
  },
  blogContainer: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};
function Blogs() {
  return (
    <Box>
      <Box sx={styles.root}>
        <Typography>.</Typography>
        <Box>
          <Typography variant="body2" sx={styles.heading}>
            BLOGS
          </Typography>
          <Divider sx={{ opacity: 10 }} />
          <Box sx={styles.blogContainer}>
            {AllBlogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
export default Blogs;
