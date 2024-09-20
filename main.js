document.addEventListener('DOMContentLoaded', function() {
    var welcomeScreen = document.querySelector(".welcome-screen");
    var profileSelection = document.querySelector(".profile-selection");
    var mainContainer = document.querySelector(".container");
    var createAccountBtn = document.getElementById("createAccountBtn");
    var loginAccountBtn = document.getElementById("loginAccountBtn");
    var workerProfileBtn = document.getElementById("workerProfile");
    var retireeProfileBtn = document.getElementById("retireeProfile");
    var modal = document.getElementById("infoModal");
    var openBtn = document.getElementById("openModal");
    var simulateNowBtn = document.querySelector(".simulate");
    var simulateNowModalBtn = document.getElementById("simulateNow");
    var loginButton = document.getElementById("loginButton");
    var loginModal = document.getElementById("loginModal");
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");
    var showRegister = document.getElementById("showRegister");
    var showLogin = document.getElementById("showLogin");
    var loginSubmit = document.getElementById("loginSubmit");
    var registerSubmit = document.getElementById("registerSubmit");
    var step1 = document.getElementById("step1");
    var step2 = document.getElementById("step2");
    var step3 = document.getElementById("step3");
    var step4 = document.getElementById("step4");
    var continueToStep2Btn = document.getElementById("continueToStep2");
    var continueToStep3Btn = document.getElementById("continueToStep3");
    var continueToStep4Btn = document.getElementById("continueToStep4");

    var userProfile = '';

    createAccountBtn.onclick = function() {
        welcomeScreen.style.display = "none";
        profileSelection.style.display = "flex";
    }

    loginAccountBtn.onclick = function() {
        welcomeScreen.style.display = "none";
        loginModal.style.display = "block";
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    }

    workerProfileBtn.onclick = function() {
        userProfile = 'worker';
        showRegistrationForm();
    }

    retireeProfileBtn.onclick = function() {
        userProfile = 'retiree';
        showRegistrationForm();
    }

    function showRegistrationForm() {
        profileSelection.style.display = "none";
        loginModal.style.display = "block";
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }

    function startSimulationFlow() {
        alert("Funcionalidade de simulação em desenvolvimento");
        // Aqui você implementará a lógica para iniciar o fluxo de simulação
    }

    simulateNowBtn.onclick = startSimulationFlow;
    simulateNowModalBtn.onclick = startSimulationFlow;

    openBtn.onclick = function() {
        modal.style.display = "block";
        step1.style.display = "block";
        step2.style.display = "none";
        step3.style.display = "none";
        step4.style.display = "none";
    }

    continueToStep2Btn.onclick = function() {
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        step4.style.display = "none";
    }

    continueToStep3Btn.onclick = function() {
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        step4.style.display = "none";
    }

    continueToStep4Btn.onclick = function() {
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "none";
        step4.style.display = "block";
    }

    loginButton.onclick = function() {
        loginModal.style.display = "block";
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    }

    showRegister.onclick = function(e) {
        e.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }

    showLogin.onclick = function(e) {
        e.preventDefault();
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    }

    loginSubmit.onclick = function(e) {
        e.preventDefault();
        var email = document.getElementById("loginEmail").value;
        var password = document.getElementById("loginPassword").value;
        console.log("Login:", email, password);
        alert("Funcionalidade de login em desenvolvimento");
        showMainContent();
    }

    registerSubmit.onclick = function(e) {
        e.preventDefault();
        var name = document.getElementById("registerName").value;
        var email = document.getElementById("registerEmail").value;
        var phone = document.getElementById("registerPhone").value;
        var termsAgreed = document.getElementById("termsAgreement").checked;

        if (termsAgreed) {
            console.log("Cadastro:", {
                profile: userProfile,
                name: name,
                email: email,
                phone: phone
            });
            alert("Cadastro realizado com sucesso!");
            showMainContent();
        } else {
            alert("Você precisa aceitar os termos para continuar.");
        }
    }

    function showMainContent() {
        welcomeScreen.style.display = "none";
        profileSelection.style.display = "none";
        loginModal.style.display = "none";
        mainContainer.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    }
});