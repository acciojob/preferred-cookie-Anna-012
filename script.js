//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const form = document.querySelector("form");

  // Helper function to set a cookie
  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  // Helper function to get a cookie value by name
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? match[2] : null;
  };

  // Apply saved preferences on load
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", `${savedFontSize}px`);
    fontSizeInput.value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    fontColorInput.value = savedFontColor;
  }

  // Save preferences on form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Save to cookies
    setCookie("fontsize", fontSize, 30); // Save for 30 days
    setCookie("fontcolor", fontColor, 30);

    // Apply changes immediately
    document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
    document.documentElement.style.setProperty("--fontcolor", fontColor);

    alert("Preferences saved!");
  });
});
