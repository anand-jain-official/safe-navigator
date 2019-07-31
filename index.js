function safe(obj, exp) { 
	const s = exp.split('.');
	let val = obj;
	let i;
	try { 
		for(i = 0; i < s.length; i++) { 
		val = val[s[i]];
	 	}
		return val;
	 } catch(err) { 
		return undefined;	
	 }
 }

 module.exports = safe;