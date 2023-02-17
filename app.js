const tabButtonsArray = document.querySelectorAll('.tab-button');

document.getElementById("tab-1").style.display = 'block';


function showTab(button) {


    tabButtonsArray.forEach((button) => {
        button.classList.remove('active');
    });
    
    button.classList.add('active');

    
    const tabContentsArray = document.querySelectorAll('.tab-content');
    tabContentsArray.forEach((content) => {
        content.style.display = "none";
    });


    const tabId = button.getAttribute('data-tab');
    const tabContent = document.getElementById(tabId);
    tabContent.style.display = 'block';
}

tabButtonsArray.forEach((button) => {

    button.addEventListener('mouseover', () => {
            showTab(button)
        });
    });

    document.getElementById("tab-1").style.display = 'block';