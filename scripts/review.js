//using localStorage to keep track of the number of reviews
//completed by the user client by adding a counter to the form
//submission review.html page.
//Each time that page is loaded successfully upon form
//submission. we are adding one to the counter
document.addEventListener('DOMContentLoaded', () => {
    // Retrieving the current review count from localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    
    // Initializing review count if it doesn't exist
    if (!reviewCount) {
        reviewCount = 0;
    }

    // Incrementing the review count
    reviewCount = parseInt(reviewCount) + 1;

    // Saving the updated review count back to localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Displaying the updated review count on the page
    document.getElementById('reviewCounter').textContent = reviewCount;
});