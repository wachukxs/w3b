/**
 * Cryptography is the practice and study of 
 * techniques for secure communication in the 
 * presence of adversarial behavior. 
 * More generally, cryptography is about constructing 
 * and analyzing protocols that prevent third parties 
 * or the public from reading private messages; 
 * various aspects in information security 
 * such as data confidentiality, data integrity, 
 * authentication, and non-repudiation are central 
 * to modern cryptography. Symmetric-key 
 * cryptography refers to encryption methods 
 * in which both the sender and receiver share 
 * the same key while Asymmetric key cryptography 
 * two different but mathematically related keys are used. 
 * 
 * The method (or algorithm) that is being used for 
 * encrypting and decrypting a message is called a cipher. 
 * Write a simple cipher in Javascript that takes a string 
 * as an argument and returns an encrypted text as 
 * well as takes encrypted text and returns the original text. 
 * 
 * Explain your choice of cipher in the field below. 
 * An excel sheet will be provided where you will paste 
 * your github link for the solution
 */


const crypto = require('crypto');

function encryptText(text) {
    return crypto.createCipheriv('aes-256-ccm', process.env.SECRET_KEY, process.env.IV)
        .update('Message to hide!', "ascii") // update the cipher with our secret string
        .final("hex") // save the encryption as hex-encoded
}

function decryptText(encryption) {
    return crypto.createDecipheriv('aes-256-ccm', process.env.SECRET_KEY, process.env.IV)
        .update(encryption, "hex")
        .final("ascii")
}
