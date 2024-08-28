// script.js

// Exemplo de códigos para cada layout
const layoutsCode = {
    fullPageLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Full Page Layout</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: #007bff;
                color: white;
            }
        </style>
    </head>
    <body>
        <h1>Full Page Layout</h1>
        <p>This layout covers the full page.</p>
    </body>
    </html>
    `,
    headerFooterLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Header and Footer Layout</title>
        <style>
            body {
                display: flex;
                flex-direction: column;
                height: 100vh;
                margin: 0;
            }
            header, footer {
                background: #007bff;
                color: white;
                padding: 1em;
            }
            main {
                flex: 1;
                padding: 1em;
            }
        </style>
    </head>
    <body>
        <header>Header</header>
        <main>Main Content</main>
        <footer>Footer</footer>
    </body>
    </html>
    `,
    sidebarLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sidebar Layout</title>
        <style>
            body {
                display: flex;
                margin: 0;
                height: 100vh;
            }
            aside {
                width: 250px;
                background: #007bff;
                color: white;
                padding: 1em;
            }
            main {
                flex: 1;
                padding: 1em;
            }
        </style>
    </head>
    <body>
        <aside>Sidebar</aside>
        <main>Main Content</main>
    </body>
    </html>
    `,
    gridLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Grid Layout</title>
        <style>
            body {
                margin: 0;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
                padding: 10px;
            }
            div {
                background: #007bff;
                color: white;
                padding: 1em;
            }
        </style>
    </head>
    <body>
        <div>Grid Item 1</div>
        <div>Grid Item 2</div>
        <div>Grid Item 3</div>
        <div>Grid Item 4</div>
        <div>Grid Item 5</div>
        <div>Grid Item 6</div>
    </body>
    </html>
    `,
    twoColumnsLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Two Columns Layout</title>
        <style>
            body {
                display: flex;
                margin: 0;
            }
            .column {
                flex: 1;
                padding: 1em;
                border: 1px solid #ccc;
            }
        </style>
    </head>
    <body>
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
    </body>
    </html>
    `,
    threeColumnsLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Three Columns Layout</title>
        <style>
            body {
                display: flex;
                margin: 0;
            }
            .column {
                flex: 1;
                padding: 1em;
                border: 1px solid #ccc;
            }
        </style>
    </head>
    <body>
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
        <div class="column">Column 3</div>
    </body>
    </html>
    `,
    spaLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Single Page Application Layout</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            nav {
                background: #007bff;
                color: white;
                padding: 1em;
            }
            #content {
                padding: 1em;
            }
        </style>
    </head>
    <body>
        <nav>Navigation Bar</nav>
        <div id="content">
            <h1>SPA Layout</h1>
            <p>This is a single page application layout.</p>
        </div>
    </body>
    </html>
    `,
    blogLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Blog Layout</title>
        <style>
            body {
                display: flex;
                margin: 0;
                font-family: Arial, sans-serif;
            }
            main {
                flex: 2;
                padding: 1em;
            }
            aside {
                flex: 1;
                padding: 1em;
                background: #f4f4f4;
            }
        </style>
    </head>
    <body>
        <main>
            <article>
                <h1>Blog Post Title</h1>
                <p>Blog post content goes here...</p>
            </article>
        </main>
        <aside>
            <h2>Sidebar</h2>
            <p>Additional content or navigation goes here.</p>
        </aside>
    </body>
    </html>
    `,
    magazineLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Magazine Layout</title>
        <style>
            body {
                display: grid;
                grid-template-columns: 2fr 1fr;
                grid-template-rows: auto auto;
                gap: 10px;
                margin: 0;
                padding: 10px;
            }
            header {
                grid-column: 1 / span 2;
                background: #007bff;
                color: white;
                padding: 1em;
                text-align: center;
            }
            article {
                background: #f4f4f4;
                padding: 1em;
            }
            aside {
                background: #f4f4f4;
                padding: 1em;
            }
        </style>
    </head>
    <body>
        <header>Magazine Header</header>
        <article>Feature Article</article>
        <aside>Related Articles</aside>
    </body>
    </html>
    `,
    dashboardLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard Layout</title>
        <style>
            body {
                display: grid;
                grid-template-columns: 1fr 3fr;
                gap: 10px;
                margin: 0;
                height: 100vh;
            }
            nav {
                background: #007bff;
                color: white;
                padding: 1em;
            }
            main {
                padding: 1em;
            }
        </style>
    </head>
    <body>
        <nav>Dashboard Navigation</nav>
        <main>Dashboard Content</main>
    </body>
    </html>
    `,
    ecommerceLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>E-commerce Layout</title>
        <style>
            body {
                display: grid;
                grid-template-columns: 1fr 4fr;
                gap: 10px;
                margin: 0;
            }
            aside {
                background: #007bff;
                color: white;
                padding: 1em;
            }
            main {
                padding: 1em;
            }
        </style>
    </head>
    <body>
        <aside>Categories</aside>
        <main>
            <h1>Product Listings</h1>
            <p>Product content goes here...</p>
        </main>
    </body>
    </html>
    `,
    landingPageLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Landing Page Layout</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
            }
            header {
                background: #007bff;
                color: white;
                padding: 2em;
                text-align: center;
            }
            main {
                padding: 2em;
                text-align: center;
            }
            footer {
                background: #f4f4f4;
                padding: 1em;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Landing Page Header</h1>
        </header>
        <main>
            <h2>Welcome to Our Service</h2>
            <p>Some information about the service...</p>
        </main>
        <footer>Landing Page Footer</footer>
    </body>
    </html>
    `,
    portfolioLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Layout</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
            }
            header {
                background: #007bff;
                color: white;
                padding: 2em;
                text-align: center;
            }
            main {
                padding: 2em;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
            }
            footer {
                background: #f4f4f4;
                padding: 1em;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Portfolio Header</h1>
        </header>
        <main>
            <div>Project 1</div>
            <div>Project 2</div>
            <div>Project 3</div>
            <div>Project 4</div>
            <div>Project 5</div>
            <div>Project 6</div>
        </main>
        <footer>Portfolio Footer</footer>
    </body>
    </html>
    `,
    contactPageLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Page Layout</title>
        <style>
            body {
                margin: 0;
                padding: 2em;
                font-family: Arial, sans-serif;
            }
            h1 {
                color: #007bff;
            }
            form {
                display: flex;
                flex-direction: column;
            }
            label {
                margin-bottom: 0.5em;
            }
            input, textarea {
                margin-bottom: 1em;
                padding: 0.5em;
                border: 1px solid #ccc;
            }
        </style>
    </head>
    <body>
        <h1>Contact Us</h1>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name">
            
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
            
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
            
            <button type="submit">Send</button>
        </form>
    </body>
    </html>
    `,
    heroSectionLayoutCode: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hero Section Layout</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
            }
            .hero {
                height: 100vh;
                background: url('hero.jpg') no-repeat center center/cover;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="hero">
            <h1>Welcome to Our Website</h1>
            <p>Your success starts here</p>
        </div>
    </body>
    </html>
    `,
};

// Função para abrir o popup com o código do layout selecionado
function openPopup(layoutKey) {
    document.getElementById("popupTitle").innerText = layoutKey.replace(/([A-Z])/g, ' $1');
    document.getElementById("popupCode").innerText = layoutsCode[layoutKey];
    document.getElementById("codePopup").style.display = "block";
}

// Função para fechar o popup
function closePopup() {
    document.getElementById("codePopup").style.display = "none";
}

// Função para copiar o código para a área de transferência
function copyToClipboard() {
    const code = document.getElementById("popupCode").innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard");
    });
}
