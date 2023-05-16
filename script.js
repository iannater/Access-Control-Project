function displayData() {
    var integration = document.getElementById('integration').value;
    var behavior = document.getElementById('behavior').value;
    var extraQuestion = document.getElementById('extraQuestion').value;
    var outputDiv = document.getElementById('output');

    // Clear the output div
    outputDiv.innerHTML = '';

    var imagePath;

    //Avigilon 
    if (integration === 'avigilon' && behavior === 'tapBadge') {
        imagePath = data.avigilon.badgeSignIn;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }
    else if (integration === 'avigilon' && behavior === 'registerSignIn' && extraQuestion === 'assignUserGroups') {
        imagePath = data.avigilon.restrictedAccessGroups;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }
    else if (integration === 'avigilon' && behavior === 'registerSignIn' && extraQuestion === 'setAccessDuration') {
        imagePath = data.avigilon.restrictedAccessEmployee;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }
    else if (integration === 'avigilon' && behavior === 'registerAccess' && extraQuestion === 'assignUserGroups') {
        imagePath = data.avigilon.regTapBadgeGroups;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }
    else if (integration === 'avigilon' && behavior === 'registerAccess' && extraQuestion === 'setAccessDuration') {
        imagePath = data.avigilon.regTapBadgeEmployee;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }

    //Brivo
    if (integration === 'brivo' && behavior === 'tapBadge') {
        imagePath = data.brivo.badgeSignIn;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }
    else if (integration === 'brivo' && behavior === 'registerSignIn' && extraQuestion === 'assignUserGroups') {
        imagePath = data.brivo.restrictedAccessGroups;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }
    else if (integration === 'brivo' && behavior === 'registerSignIn' && extraQuestion === 'setAccessDuration') {
        imagePath = data.brivo.restrictedAccessEmployee;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }
    else if (integration === 'brivo' && behavior === 'registerAccess' && extraQuestion === 'assignUserGroups') {
        imagePath = data.brivo.regTapBadgeGroups;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }
    else if (integration === 'brivo' && behavior === 'registerAccess' && extraQuestion === 'setAccessDuration') {
        imagePath = data.brivo.regTapBadgeEmployee;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }

    console.log("Kisi data", data);
    //Kisi
    if (integration === 'kisi' && behavior === 'tapBadge') {
        imagePath = data.kisi.badgeSignIn;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }
    else if (integration === 'kisi' && behavior === 'registerAccess') {
        imagePath = data.kisi.regSignIn;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }
    else if (integration === 'kisi' && behavior === 'registerSignIn') {
        imagePath = data.kisi.restrictedAccessEmployee;
        document.getElementById('integrationTitle').classList.remove('hidden');
    }


    if (imagePath) {
        // Create a new img element
        var img = document.createElement('img');
        img.src = imagePath;
        img.alt = "Description of the image";

        // Add the new img element to the output div
        outputDiv.appendChild(img);
    }

    document.getElementById('behaviorDiv').classList.remove('hidden');

    // Show or hide the extraQuestion div based on the conditions
    if ((integration === 'avigilon' || integration === 'brivo') && (behavior === 'registerSignIn' || behavior === 'registerAccess')) {
        document.getElementById('extraQuestionDiv').classList.remove('hidden');
    } else {
        document.getElementById('extraQuestionDiv').classList.add('hidden');
    }

    var settingsObject;
    if (behavior === 'registerSignIn') {
        settingsObject = accountSettings.restrictedAccess;
    } else if (behavior === 'tapBadge') {
        settingsObject = accountSettings.badgeSignIn;
    } else if (behavior === 'registerAccess') {
        settingsObject = accountSettings.regBadgeSignIn;
    }

    // Update the accountSettings div
    var accountSettingsDiv = document.getElementById('accountSettings');
    var accountSettingsList = document.getElementById('accountSettingsList');
    // Clear the list
    accountSettingsList.innerHTML = '';
    if (settingsObject && (extraQuestion !== 'default' || behavior === 'tapBadge')) {
        // Create a new list item for each key-value pair in the settings object
        for (var key in settingsObject) {
            var formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
            var listItem = document.createElement('li');
            listItem.textContent = formattedKey + ' - ' + settingsObject[key];
            accountSettingsList.appendChild(listItem);
        }
        accountSettingsDiv.classList.remove('hidden');
    } else {
        accountSettingsDiv.classList.add('hidden');
    }


}


// Your modal display code here
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("extraQuestionModal");
    var btn = document.getElementById("infoIcon");
    var span = document.getElementsByClassName("close")[0];

        btn.onclick = function (event) {
            modal.style.display = "block";

            // Position the modal near the clicked element
            var rect = event.target.getBoundingClientRect();
            modal.style.left = rect.left + 'px';
            modal.style.top = rect.bottom + 'px';
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

});

// Define image data
var data = {
    avigilon: {
        restrictedAccessEmployee: 'assets/avigilon/restrictedAccessEmployee.png',
        restrictedAccessGroups: 'assets/avigilon/restrictedAccessGroups.png',
        badgeSignIn: 'assets/avigilon/badgeSignIn.png',
        regTapBadgeEmployee: 'assets/avigilon/regTapBadgeEmployee.png',
        regTapBadgeGroups: 'assets/avigilon/regTapBadgeGroups.png'
    },
    brivo: {
        restrictedAccessEmployee: 'assets/brivo/restrictedAccessEmployee.png',
        restrictedAccessGroups: 'assets/brivo/restrictedAccessGroups.png',
        badgeSignIn: 'assets/brivo/badgeSignIn.png',
        regTapBadgeEmployee: 'assets/brivo/regTapBadgeEmployee.png',
        regTapBadgeGroups: 'assets/brivo/regTapBadgeGroups.png'
    },
    kisi: {
        restrictedAccessEmployee: 'assets/kisi/ResAccess.png',
        badgeSignIn: 'assets/kisi/BadgeSignIn.png',
        regSignIn: 'assets/kisi/RegAccess.png'
    },
    // add more integrations as needed...
};

//Define Account Setting Data
var accountSettings = {
    restrictedAccess: {
        healthWindow: "On but can be set to your preference.",
        autoSignOut: "This must be on but you can set it to your prefered time.",
        autoSignIn: "Optional",
        employeeQuestionnaire: "Optional"
    },
    badgeSignIn: {
        healthWindow: "Day before 12AM to day of 11:45 PM.",
        autoSignOut: "Has to be on for desired time.",
        autoSignIn: "Off",
        employeeQuestionnaire: "Off"
    },
    regBadgeSignIn: {
        healthWindow: "On but can be set to your preference.",
        autoSignOut: "This must be on but you can set it to your prefered time.",
        autoSignIn: "Off",
        employeeQuestionnaire: "Optional"
    }
};


