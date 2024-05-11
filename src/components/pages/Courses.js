import { Typography, Box } from "@mui/material";
import * as React from "react";
import BlogCard from "../commonStyles/BlogCard";
import Divider from "@mui/material/Divider";
import { AllCourses } from "../../utils";
import { styles } from "./Blogs";
function Courses() {
  return (
    <Box sx={styles.root}>
      <Typography>.</Typography>
      <Box>
        <Typography variant="body2" sx={styles.heading}>
          COURSES
        </Typography>
        <Divider variant="full" sx={{ opacity: 10 }} />
        <Box sx={styles.blogContainer}>
          {AllCourses.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
export default Courses;
