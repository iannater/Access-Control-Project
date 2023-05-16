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

    console.log("Kisi data",data);
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
        console.error("Image path not met")
    }
}



// Define your data
var data = {
    avigilon: {
        restrictedAccessEmployee: 'assets/avigilon/restrictedAccessEmployee.png',
        restrictedAccessGroups: 'assets/avigilon/restrictedAccessGroups.png',
        badgeSignIn: 'assets/avigilon/badgeSignIn.png',
        regTapBadgeEmployee:'assets/avigilon/regTapBadgeEmployee.png',
        regTapBadgeGroups:'assets/avigilon/regTapBadgeGroups.png'
    },
    brivo: {
        restrictedAccessEmployee: 'assets/brivo/restrictedAccessEmployee.png',
        restrictedAccessGroups: 'assets/brivo/restrictedAccessGroups.png',
        badgeSignIn: 'assets/brivo/badgeSignIn.png',
        regTapBadgeEmployee:'assets/brivo/regTapBadgeEmployee.png',
        regTapBadgeGroups:'assets/brivo/regTapBadgeGroups.png'
    },
    kisi: {
        restrictedAccessEmployee: 'assets/kisi/ResAccess.png',
        badgeSignIn: 'assets/kisi/BadgeSignIn.png',
        regSignIn:'assets/kisi/RegAccess.png'
    },
    // add more integrations as needed...
};



