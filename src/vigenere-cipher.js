const CustomError = require("../extensions/custom-error");
module.exports = class VigenereCipheringMachine {

  constructor (isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(str, key) {
    if (!str && !key) return '';
    this.key = this.filterKey(key);
    let outputStr = this.crypt(str, this.key);
    if (!this.isDirect) {
      outputStr = (outputStr.split('')).reverse().join('');
      }
    return outputStr.toUpperCase();
    }

  decrypt(str, key) {
    if (!str && !key) return '';
    this.key = this.filterKey(key);
      for (var i = 0; i < this.key.length; i++)
        this.key[i] = (26 - this.key[i]) % 26;
    let outputStr = this.crypt(str, this.key);
    if (!this.isDirect) {
      outputStr = (outputStr.split('')).reverse().join('');
      }
    return outputStr.toUpperCase();
    }
  
  filterKey(key) {
	var result = [];
	for (var i = 0; i < key.length; i++) {
		var c = key.charCodeAt(i);
		if (this.isLetter(c))
			result.push((c - 65) % 32);
	}
	return result;
  }

  crypt(input, key) {
    var output = "";
    for (var i = 0, j = 0; i < input.length; i++) {
      var c = input.charCodeAt(i);
      if (this.isUppercase(c)) {
        output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
        j++;
      } else if (this.isLowercase(c)) {
        output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
        j++;
      } else {
        output += input.charAt(i);
      }
    }
    return output;
  }

isLetter(c) {
	return this.isUppercase(c) || this.isLowercase(c);
}

isUppercase(c) {
	return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
}

isLowercase(c) {
	return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'
}

}