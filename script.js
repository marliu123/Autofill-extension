document.getElementById("autofill").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName'),
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            address1: document.getElementById('address1').value,
            address2: document.getElementById('address2').value,
            address3: document.getElementById('address3').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            postalCode: document.getElementById('postalCode').value,
            country: document.getElementById('country').value,
            cardNumber: document.getElementById('cardNumber').value,
            cardMonth: document.getElementById('cardMonth').value,
            cardYear: document.getElementById('cardYear').value,
            cardCCV: document.getElementById('cardCCV').value,
        })
    })
})