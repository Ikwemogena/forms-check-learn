const form = document.querySelector('.form');

var notification = document.getElementById('notification');
var closeBtn = document.querySelector('.close-btn');

// Hide notification when close button is clicked
closeBtn.addEventListener('click', function() {
  notification.classList.remove('show');
});


form.addEventListener('submit', () => {
    event.preventDefault();

    // Show notification
    notification.classList.add('show');

    const formData = new FormData(form);

    const data = Object.fromEntries(formData);

    console.log(data)
    
    // fetch('https://eodh6njvzgfl22j.m.pipedream.net', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'applicantEmail': 'test-m@checklearn.com'
    //     },
    //     body: JSON.stringify(data)
    // })


    // Reset the form
    form.reset();

    // Hide notification after 5 seconds
    setTimeout(function() {
      notification.classList.remove('show');
    }, 4000);
})
