# Message-Mixer

Message Mixer Inc. offers a message-encryption service that transforms input text, using various ciphers, and displays the encrypted message to the console.

There are three encryption methods provided by this service:

1. A “Caesar Cipher” in which the characters of the input message are shifted alphabetically by a given amount.
2. A “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols.
3. A “Reverse Cipher” in which each word of the input message is reversed in place.

### To use this service, run the command below:
node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]

### Here are some examples of running this program:
$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> lipps asvph
 
$ node message-mixer.js 'reverse'
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> olleh dlrow
