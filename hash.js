
//--------------------------- hash ---------------------------//

    const crypto = require("crypto")
    const algorithm = "aes-256-ctr"
    const password = "00827991492978443884765542754293" // a random 32bit number
    
    exports.encrypt =  function(text){
        const iv = crypto.randomBytes(16);
        var cipher = crypto.createCipheriv(algorithm, Buffer.from(password), iv);
        var encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return { iv: iv.toString('hex'),
            encryptedData: encrypted.toString('hex') };
    }
    
    exports.decrypt = function(text){
        var iv = Buffer.from(text.iv, 'hex');
        var encryptedText = Buffer.from(text.encryptedData, 'hex');
        var decipher = crypto.createDecipheriv(algorithm, Buffer.from(password), iv);
        var decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        
        return decrypted.toString();
    }
    
//--------------------------- hash ---------------------------//
