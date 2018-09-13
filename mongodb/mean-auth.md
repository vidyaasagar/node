#### So what does authentication look like in the MEAN stack?

* User data is stored in MongoDB, with the passwords hashed
* CRUD functions are built in an Express API — Create (register), Read (login, get profile), Update, Delete
* An Angular application calls the API and deals with the responses
* The Express API generates a JSON Web Token (JWT, pronounced “Jot”) upon registration or login, and passes this to the Angular application
* The Angular application stores the JWT in order to maintain the user’s session
* The Angular application checks the validity of the JWT when displaying protected views
* The Angular application passes the JWT back to Express when calling protected API routes.

JWTs are preferred over cookies for maintaining the session state in the browser. Cookies are better for maintaining state when using a server-side application.

#### Managing the Password without Saving It

The salt is a string of characters unique to each user. The hash is created by combining the password provided by the user and the salt, and then applying one-way encryption. As the hash can’t be decrypted, the only way to authenticate a user is to take the password, combine it with the salt and encrypt it again. If the output of this matches the hash, the password must have been correct.

#### JWT?
<!-- https://blog.angular-university.io/angular-jwt-authentication/ -->
<!-- https://blog.angular-university.io/angular-2-universal-meet-the-internet-of-the-future-seo-friendly-single-page-web-apps/ -->
<!-- https://blog.angular-university.io/angular-universal/ -->
* JSON Web Tokens is an industry standard that provides a safe and compact way for representing data transferred between two parties.
* JWT's can be verified because they are signed, typically using a secret with the HMACSHA-256 algorithm.
* 
A JWT is actually made up of three separate strings, separated by a dot .. These three parts are:

Header — an encoded JSON object containing the type(JWT) and the hashing algorithm(HMACSHA-256) used
Payload — an encoded JSON object containing the data, the real body of the token
Signature — an encrypted hash of the header and payload, using the “secret” set on the server.