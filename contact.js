// Function to submit rating and feedback
function submitRating() {
    // Get selected rating value
var rating = document.querySelector('input[name="rating"]:checked').value;
    // Get feedback text
var feedback = document.getElementById("feedback").value;
  
    // AJAX request to submit the rating and feedback to server
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"); // change the URL to the appropriate server endpoint
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Display the submitter's rating and feedback in the feedback container
        var response = JSON.parse(this.responseText);
        var feedbackContainer = document.getElementById("feedback-container");
        var newFeedback = document.createElement("p");
        newFeedback.innerHTML = "<strong>Your rating:</strong> " + response.rating + " stars<br><strong>Your feedback:</strong> " + response.feedback;
        feedbackContainer.appendChild(newFeedback);
        // Clear the input fields
        document.querySelector('input[name="rating"]:checked').checked = false;
        document.getElementById("feedback").value = "";
      }
    };
    var data = JSON.stringify({rating: rating, feedback: feedback});
    xhr.send(data);
  }
  