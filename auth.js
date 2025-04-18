async function handleSignin(e) {
    e.preventDefault();
    console.log("Signin button clicked!"); // Debugging log

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    console.log("Email:", email);  // Debugging log
    console.log("Password:", password);  // Debugging log

    try {
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        console.log("Response data:", data);  // Debugging log

        if (res.ok) {
            // Save user data to localStorage
            localStorage.setItem('token', data.token); // If you're using JWT
            localStorage.setItem('user', JSON.stringify(data.user));
            alert("Login successful!");
            window.location.href = 'index.html';

            // Reset Sign In Form after successful login
            document.getElementById('signin-form').reset();
            console.log("Signin form reset"); // Debugging log
        } else {
            document.getElementById('signin-error').style.display = 'block';
            document.getElementById('signin-error').innerText = data.message || "Login failed!";
        }
    } catch (error) {
        console.error("Signin Error:", error);
        alert("Something went wrong!");
    }
}

async function handleSignup(e) {
    e.preventDefault();
    console.log("Signup button clicked!"); // Debugging log

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    console.log("Username:", username);  // Debugging log
    console.log("Email:", email);  // Debugging log
    console.log("Password:", password);  // Debugging log

    try {
        const res = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await res.json();
        console.log("Response data:", data);  // Debugging log

        if (res.ok) {
            alert("Signup successful! Please login.");
            window.location.href = 'login.html';

            // Reset Sign Up Form after successful signup
            document.getElementById('signup-form').reset();
            console.log("Signup form reset"); // Debugging log
        } else {
            document.getElementById('signup-error').style.display = 'block';
            document.getElementById('signup-error').innerText = data.message || "Signup failed!";
        }
    } catch (error) {
        console.error("Signup Error:", error);
        alert("Something went wrong!");
    }
}



// async function handleSignup(e) {
//     e.preventDefault();

//     const username = document.getElementById('signup-username').value;
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     try {
//         const res = await fetch('http://localhost:3000/api/auth/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ username, email, password })
//         });

//         const data = await res.json();

//         if (res.ok) {
//             alert("Signup successful! Please login.");
//             window.location.href = 'login.html'; // or wherever your login page is
//             // Reset Sign Up Form
//             document.getElementById('signup-form').reset();
//         } else {
//             document.getElementById('signup-error').style.display = 'block';
//             document.getElementById('signup-error').innerText = data.message || "Signup failed!";
//         }

//     } catch (error) {
//         console.error("Signup Error:", error);
//         alert("Something went wrong!");
//     }
// }

// async function handleSignin(e) {
//     e.preventDefault();

//     const email = document.getElementById('signin-email').value;
//     const password = document.getElementById('signin-password').value;

//     try {
//         const res = await fetch('http://localhost:3000/api/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email, password })
//         });

//         const data = await res.json();

//         if (res.ok) {
//             // Store user session locally
//             localStorage.setItem('token', data.token);  // If you're using JWT
//             localStorage.setItem('user', JSON.stringify(data.user));
//             alert("Login successful!");
//             window.location.href = 'index.html';
//             // Reset Sign In Form
//             document.getElementById('signin-form').reset();
//         } else {
//             document.getElementById('signin-error').style.display = 'block';
//             document.getElementById('signin-error').innerText = data.message || "Login failed!";
//         }

//     } catch (error) {
//         console.error("Signin Error:", error);
//         alert("Something went wrong!");
//     }
// }
