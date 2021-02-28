# Ejercicio 8

Vamos a proteger nuestra app. El objetivo va a ser que en vez de tener un main-app.js, vamos a dividirla en authenticated-app y unauthenticated-app.

La primera cargará el contenido actual cuando el usuario no esté logueado. La segunda, un nuevo router con urls de login y signup.

En este ejercicio haremos el signup, y en el siguiente el login.

He incluído unas utils en el fichero `utils/auth-utils.js` con diferentes funciones para el login. He utilizado un jwt con caducidad alta guardado en localStorage. Hay muchas razones (y literatura al respecto) de por qué esto no está bien (podemos comentarlo, me interesa vuestra opinión al respecto!)
