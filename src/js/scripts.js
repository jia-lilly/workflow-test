// This file contains the JavaScript code for the job listings website. 
// It handles fetching job listings, filtering them, and updating the UI based on user interactions.

document.addEventListener('DOMContentLoaded', () => {
    const jobListContainer = document.getElementById('job-listings');
    const filterInput = document.getElementById('filter-input');

    // Fetch job listings from an API or local source
    async function fetchJobListings() {
        try {
            const response = await fetch('https://api.example.com/jobs'); // Replace with actual API endpoint
            const jobs = await response.json();
            displayJobListings(jobs);
        } catch (error) {
            console.error('Error fetching job listings:', error);
        }
    }

    // Display job listings in the UI
    function displayJobListings(jobs) {
        jobListContainer.innerHTML = '';
        jobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('job-listing');
            jobElement.innerHTML = `
                <h3>${job.title}</h3>
                <p>${job.company}</p>
                <p>${job.location}</p>
                <p>${job.description}</p>
            `;
            jobListContainer.appendChild(jobElement);
        });
    }

    // Filter job listings based on user input
    filterInput.addEventListener('input', () => {
        const filterValue = filterInput.value.toLowerCase();
        const jobListings = document.querySelectorAll('.job-listing');
        jobListings.forEach(job => {
            const title = job.querySelector('h3').textContent.toLowerCase();
            if (title.includes(filterValue)) {
                job.style.display = '';
            } else {
                job.style.display = 'none';
            }
        });
    });

    // Initial fetch of job listings
    fetchJobListings();
});