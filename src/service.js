import axios from "axios";
export const getFeedbackJson = async (resumeText) => {
  try {
    console.log(resumeText,'text');
    const response = await axios.post(
      "http://localhost:6090/v1/app/completions",
      {
        body: resumeText,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};


