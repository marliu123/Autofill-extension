chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try{
            document.getElementById("email").value = request.email;
            document.getElementById("TextField1").value = request.firstName;
            document.getElementById("TextField2").value = request.lastName;
            document.getElementById("address1").value = request.address1;
            document.getElementById("TextField4").value = request.address2;
            document.getElementById("TextField7").value = request.city;
            document.getElementById("Select2").value = request.state;
            document.getElementById("TextField8").value = request.postalCode;
            document.getElementById("TextField6").value = request.phoneNumber;
            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }
)