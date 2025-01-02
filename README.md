# nodejs-ejs-app
simple containerized nodejs app with ejs
Using an Existing Scaffolding Tool

If you want a one-liner command using npx, you can leverage existing tools like express-generator:

    Install the express-generator tool globally (if not already installed):

npm install -g express-generator

Use it to create a project with EJS:

    npx express --view=ejs my-project
    cd my-project
    npm install

    This will create a complete Node.js application structure with EJS already set up.

Express Generator Tree

If you use express-generator, the resulting structure will look like this:

my-project/
├── app.js
├── bin/
│   └── www
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css
├── routes/
│   ├── index.js
│   └── users.js
├── views/
│   ├── error.ejs
│   ├── index.ejs
│   └── layout.ejs
├── package.json
└── node_modules/

This is the simplest way to create a full-featured tree using npx and scaffolding tools.