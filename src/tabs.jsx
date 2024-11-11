const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content .tab');
const line = document.querySelector('.line');
let activeTab = 0; // Track the currently active tab

tabs.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    if (index === activeTab) return; // Ignore if the same tab is clicked

    tabs.forEach(button => button.classList.remove('active'));
    button.classList.add('active');

    // Adjust the line under the tab
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    // Set up direction for the slide animation
    const isNext = index > activeTab;
    const outClass = isNext ? 'slide-out-left' : 'slide-out-right';
    const inClass = isNext ? 'slide-in-right' : 'slide-in-left';

    // Apply outgoing animation to the current tab
    const outgoingTab = tabContents[activeTab];
    outgoingTab.classList.remove('active', 'slide-in-left', 'slide-in-right');
    outgoingTab.classList.add(outClass);

    // Apply incoming animation to the new tab simultaneously
    const incomingTab = tabContents[index];
    incomingTab.classList.remove('slide-out-left', 'slide-out-right');
    incomingTab.classList.add('active', inClass);

    // Update active tab index
    activeTab = index;
  });
});

// Initialize first tab as active on load
tabs[0].classList.add('active');
tabContents[0].classList.add('active');
line.style.width = tabs[0].offsetWidth + "px";
line.style.left = tabs[0].offsetLeft + "px";
