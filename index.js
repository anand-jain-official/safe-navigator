function safe(obj, exp) { 
	
        if (typeof obj !== "object" || typeof exp !== "string") return undefined
        
        const keyArray = exp.split('.');
	
          try { 
		for(i = 0; i < keyArray.length; i++) { 
		   obj = obj[keyArray[i]];
	 	}
		return obj;
	 } catch(err) { 
		return undefined;	
	 }
 }

 module.exports = safe;
