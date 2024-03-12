document.getElementById('hideButton').addEventListener('click', function () {
    let elementsToHide = document.querySelectorAll('#hide');
    let elementsToShow = document.querySelectorAll('.hidden');
    let totalElementsToHide = elementsToHide.length;
    let elementsHidden = 0;
    let backgroundMusic = document.getElementById('backgroundMusic');


    elementsToHide.forEach(function (element) {
        element.classList.add('vanish');
        document.getElementById('hideButton').style.display = 'none';
        element.addEventListener('animationend', function () {
            // Set display: none after the transition is complete
            element.style.display = 'none';

            // Check if all elements have finished hiding
            elementsHidden++;
            if (elementsHidden === totalElementsToHide) {
                // All elements have finished hiding, now show the new elements
                elementsToShow.forEach(function (element) {
                    element.classList.toggle('show');
                    element.classList.toggle('hidden');
                });
            }
        }, { once: true });
    });

    var cutTime = 15; // Adjust this value based on your requirement
    backgroundMusic.currentTime = cutTime;
    backgroundMusic.play();
});


document.getElementById('copyBRI').addEventListener('click', function () {
    // Get the text you want to copy
    var textToCopy = "000701118117509";

    // Create a temporary input element
    var tempInput = document.createElement('input');
    tempInput.value = textToCopy;

    // Append the input element to the body
    document.body.appendChild(tempInput);

    // Select the text inside the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);
    window.alert('Copied To Clipboard');
});
document.getElementById('whatsappButton').addEventListener('click', function () {
  let phoneNumber = '6285776334827';

  // You can customize the message by appending it to the URL
  let message = encodeURIComponent('Saya ingin mengirim bukti transfer (foto)');

  // Create the WhatsApp link
  let whatsappLink = 'whatsapp://send?phone=' + phoneNumber + '&text=' + message;

  // Open the link in a new tab or the same tab, depending on your requirements
  window.location.href = whatsappLink;
});

// document.addEventListener('DOMContentLoaded', function () {
//     // Set the countdown date (replace with your desired date)
//     const countdownDate = new Date('March 14, 2024 13:00:00').getTime();

//     function updateCountdown() {
//         const currentDate = new Date().getTime();
//         const timeDifference = countdownDate - currentDate;

//         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//         document.getElementById('days').innerHTML = days ;
//         document.getElementById('hours').innerHTML = hours;
//         document.getElementById('minutes').innerHTML = minutes;
//         document.getElementById('seconds').innerHTML = seconds;
//     }

//     // Update the countdown every second
//     setInterval(updateCountdown, 1000);

//     // Initial update
//     updateCountdown();
// });
