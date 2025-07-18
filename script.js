document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.querySelector('a[href="login"]');

    loginLink.addEventListener('click', (event) => {
        event.preventDefault(); // prevent default link behavior

        // Clear existing content
        const mainDiv = document.querySelector('.main');
        mainDiv.innerHTML = `
            <h1>Login</h1>
            <form action="logindata" method="POST">
                <label for="login-email">Email:</label>
                <input type="text" id="login-email" name="email">
                <br><br>
                <label for="login-password">Password:</label>
                <input type="password" id="login-password" name="password">
                <br><br>
                <input type="submit" value="Login">
                <a href="#" id="back-to-register">Back to Register</a>
            </form>
        `;

        // Add event listener to go back to registration form
        document.getElementById('back-to-register').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.reload(); // reloads the original page to restore the register form
        });
    });
});