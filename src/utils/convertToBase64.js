const convertImageToBase64 = (file) => {
  try {
    const base64Image = `data:image/jpeg;base64,${file?.buffer?.toString(
      "base64"
    )}`;
    return base64Image;
  } catch (error) {
    console.log("error while converting to base64");
  }
};

export default convertImageToBase64;