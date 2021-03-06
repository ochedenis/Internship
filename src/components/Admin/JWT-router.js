const { Router } = require('express');
const JWTmiddleware = require('./JWT-middleware');
const ServiceJWT = require('../authentication/JWT-service');

const router = Router();

/* route serving jwt registration */
router.post('/register', JWTmiddleware.registration);

/* route serving jwt authorization */
router.post('/login', JWTmiddleware.login);

/* route serving tokens update */
router.get('/token', JWTmiddleware.updateTokens);

/* deletes refresh token from db */
router.delete('/logout', JWTmiddleware.logout);

/* deletes refresh token and admin from db */
router.delete('/delete', JWTmiddleware.deleteAdmin);

/**
 * Route serving list of users.
 * @name /v2/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param jwt protection
 * @param {callback} middleware - Express middleware.
 */
router.get('/users', ServiceJWT.authenticate, JWTmiddleware.findAll);

/**
 * Route serving a new user
 * @name /v2/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param jwt protection
 * @param {callback} middleware - Express middleware.
 */
router.post('/users', ServiceJWT.authenticate, JWTmiddleware.addUser);

/**
 * Route for update a user
 * @name /v2/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param jwt protection
 * @param {callback} middleware - Express middleware.
 */
router.put('/users', ServiceJWT.authenticate, JWTmiddleware.updateById);

/**
 * Route for delete a user
 * @name /v2/users/
 * @function
 * @inner
 * @param {string} path - Express path
 * @param jwt protection
 * @param {callback} middleware - Express middleware.
 */
router.delete('/users', ServiceJWT.authenticate, JWTmiddleware.deleteUser);

module.exports = router;
