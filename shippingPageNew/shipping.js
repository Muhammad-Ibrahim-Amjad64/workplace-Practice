
      document.addEventListener('DOMContentLoaded', function () {
        var scrollableDiv = document.querySelector('.scrollableDiv');

        function checkOverflow() {
          var isOverflowing = scrollableDiv.scrollHeight > scrollableDiv.clientHeight;

          if (isOverflowing) {
            scrollableDiv.style.border = '0.1vw solid #e2e2e2'; // Set border color for overflow
            scrollableDiv.style.marginBottom = '2vw'; // Adjust margin-bottom for overflow
          } else {
            scrollableDiv.style.border = '0.1vw solid transparent'; // Reset border color
            scrollableDiv.style.marginBottom = '1vw'; // Reset margin-bottom
          }
        }

        // Call the function when the window is resized or when the content changes
        window.addEventListener('resize', checkOverflow);
        window.addEventListener('DOMContentLoaded', checkOverflow);
      });
    