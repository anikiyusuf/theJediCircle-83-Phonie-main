function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here

    // pls remove the below and make some magic in here!
    console.log('make magic in here!');

    const carrierCode = document.getElementById('carrier_code');
    const logo = document.getElementById('logo');



    carrierCode.addEventListener('change', function(event) {
        if (event.target.value.length == 11) {
            let theValue = event.target.value.toString()
            let newValue = theValue.slice(0, 4)
            if (newValue == "0803" ||
                newValue == "0806" ||
                newValue == "0813" ||
                newValue == "0706"
            ) {
                logo.setAttribute("src", "./MTNLOGO.png")
                return

            }
            if (newValue == "0802" ||
                newValue == "0812" ||
                newValue == "0808" ||
                newValue == "0701"
            ) {
                logo.setAttribute("src", "./Airtel.png")
                return

            }
            if (newValue == "0805" ||
                newValue == "0807" ||
                newValue == "0811" ||
                newValue == "0905"
            ) {
                logo.setAttribute("src", "Glo.webp")
                return

            }


        }
    })
}
// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //