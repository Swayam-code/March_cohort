// script.js

document.getElementById("generateBtn").addEventListener("click", function () {
    // Get user input values
    const hotelName = document.getElementById("hotelName").value.trim();
    const occasion = document.getElementById("occasion").value;
  
    if (!hotelName) {
      alert("Please enter your hotel name.");
      return;
    }
  
    // Simulate API call delay and generation process
    const generateBtn = document.getElementById("generateBtn");
    generateBtn.innerText = "Generating...";
    
    setTimeout(() => {
      // Generate caption based on input (simulate AI-generated content)
      const caption = generateCaption(hotelName, occasion);
      document.getElementById("generatedCaption").value = caption;
  
      // Simulate an image generation by updating the placeholder image URL
      const imageUrl = generateImageUrl(occasion);
      document.getElementById("generatedImage").src = imageUrl;
  
      // Reset button text
      generateBtn.innerText = "Generate Post";
    }, 2000); // 2-second delay to simulate processing time
  });
  
  function generateCaption(hotelName, occasion) {
    // You can enhance this function with multiple templates or randomness
    return `Celebrate ${occasion} at ${hotelName}! Experience unmatched hospitality and create unforgettable memories with us.`;
  }
  
  function generateImageUrl(occasion) {
    // Generate a dynamic placeholder image URL based on the selected occasion
    const baseUrl = "https://via.placeholder.com/400x300?text=";
    return baseUrl + encodeURIComponent(occasion + " Celebration");
  }
  
  document.getElementById("downloadBtn").addEventListener("click", function () {
    // Simulate download functionality; in a real application, this might capture the post preview as an image
    alert("Download functionality is under development.");
  });
  