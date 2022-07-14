// https://gist.github.com/alisterlf/3490957
const accents = 'ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØŐòóôőõöøĎďDŽdžÈÉÊËĘèéêëęðÇçČčĆćÐÌÍÎÏĪìíîïīÙÚÛÜŰùűúûüĽĹŁľĺłÑŇŃňñńŔŕŠŚŞšśşŤťŸÝÿýŽŻŹžżźđĢĞģğ',
	accents_out = "AAAAAAAAaaaaaaaasOOOOOOOOoooooooDdDZdzEEEEEeeeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuLLLlllNNNnnnRrSSSsssTtYYyyZZZzzzdGGgg",
	accents_map = new Map();
for (const i in accents)
	accents_map.set(accents.charCodeAt(i), accents_out.charCodeAt(i))

function removeAccents(str) {
	const nstr = new Array(str.length);
	let x, i;
	for (i = 0; i < nstr.length; i++)
		nstr[i] = accents_map.get(x = str.charCodeAt(i)) || x;
	return String.fromCharCode.apply(null, nstr);
}

function parseID(id) {

	let newID = removeAccents(id.toLowerCase().replaceAll(' ', '-'));
	newID = newID.replaceAll('?', '')
	newID = newID.replaceAll(',', '')
	newID = newID.replaceAll('.', '')
	return newID;
	
}

export function h1({ children }) {
	return (
		<h1 className="text-4xl font-bold my-4" id={parseID(children)}>
			{children}
		</h1>
	)
}

export function h2({ children }) {
	return (
		<h2 className="text-3xl font-semibold my-4" id={parseID(children)}>
			{children}
		</h2>
	)
}

export function h3({ children }) {
	return (
		<h3 className="text-2xl font-semibold my-3" id={parseID(children)}>
			{children}
		</h3>
	)
}