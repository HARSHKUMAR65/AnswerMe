
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const useGetResponse = () => {
//   const getResponse = async (query) => {
//     try {
//       console.log(query)
//       const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       const result = await model.generateContent(query);
      
//       if (result && result.response) {
//         const response = result.response;
//         console.log(response)
//         const text = response.text();
//         return text;
//       } else {
//         return "No response received.";
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       return "An error occurred while fetching the response.";
//     }
//   };

//   return getResponse;
// };

// export default useGetResponse;



import { GoogleGenerativeAI } from "@google/generative-ai";

const useGetResponse = () => {
  const getResponse = async (query) => {
    try {
      console.log(query);
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(query);
      
      if (result && result.candidates && result.candidates.length > 0) {
        const response = result.candidates[0].content.parts[0].text; // Access the text directly
        console.log(response);
        return response;
      } else {
        return "No response received.";
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      return "An error occurred while fetching the response.";
    }
  };

  return getResponse;
};

export default useGetResponse;
