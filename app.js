function init() {
    var checkboxes = document.querySelectorAll(".isAvail");
    checkboxes.forEach(checkbox => {
        // Check if checkbox has been clicked twice, so it goes Checked --> Indeterminate --> Blank
        var hasBeenClickedTwice;

        checkbox.addEventListener("change", function(e) {
            /* If the checkbox has been clicked twice (and it thinks it's "unchecked" because it has been clicked),
            change the status to interdeterminate. */
            if (!checkbox.checked) {
                checkbox.indeterminate = true;
                hasBeenClickedTwice = true;
                return;
            } 

            // If it has already been clicked twice and this is the third click, change from indeterminate to blank.
            if (hasBeenClickedTwice) {
                checkbox.indeterminate = false;
                checkbox.checked = false;
                hasBeenClickedTwice = false;
            }
        });
    })    
}
