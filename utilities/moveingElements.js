// Select the element you want to move
const scrollElement = document.querySelectorAll('.moving__element');
// Create an intersection observer callback function
const observerCallback = (entries) => {
    entries.forEach(entry => {
        // Get the visibility ratio (0 to 1)
        const visibilityRatio = entry.intersectionRatio;
        const transitionAmount = -(visibilityRatio * 100);
        // Move the element along the X-axis based on the visibility ratio
        entry.target.style.transform = `translateX(${transitionAmount}%)`;
    });
};

// Create an intersection observer with options


const observerOptions = {
    root: null, // This is the viewport
    threshold:  Array.from({ length: 101 }, (_, i) => i / 100) // 0 to 1 in steps of 0.01
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe the scroll element
scrollElement.forEach((item)=>{
    observer.observe(item);

})


// Select the element you want to move from the left
const scrollElementLeft = document.querySelectorAll('.moving__element_left');
// Create an intersection observer callback function
const observerCallback_2 = (entries) => {
    entries.forEach(entry => {
        // Get the visibility ratio (0 to 1)
        const visibilityRatio = entry.intersectionRatio;
        const transitionAmount = (visibilityRatio * 100);
        // Move the element along the X-axis based on the visibility ratio
        entry.target.style.transform = `translateX(${transitionAmount}%)`;
    });
};

// Create an intersection observer with options


const observerOptions_2 = {
    root: null, // This is the viewport
    threshold:  Array.from({ length: 101 }, (_, i) => i / 100) // 0 to 1 in steps of 0.01
};

const observer_2 = new IntersectionObserver(observerCallback_2, observerOptions_2);

// Observe the scroll element
scrollElementLeft.forEach((item)=>{
    observer_2.observe(item);

})

