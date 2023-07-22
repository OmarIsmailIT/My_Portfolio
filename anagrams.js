function isAnagramInArray(phrase, anagrams) {

    const sortedPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

    const matchingAnagrams = []
    for (const x in anagrams) {
        const sortedAnagrams = anagrams[x].toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
        if (sortedAnagrams === sortedPhrase) {
            matchingAnagrams.push(anagrams[x]);
        }
    }
    return matchingAnagrams;
}

const anagrams = [
    "oz bilal tochberer",
    "it's razorbill beachcomber",
    "och robe tilblazer",
    "bib chorizo cellarmaster",
    "thor bble carizole",
    "zll borcht aberoie",
    "brzl orche atobile",
    "dame shelburne characterizing",
    "uber englishman characterized",
    "agnes rhumbline characterized",
    "rehab scrutinized charlemagne",
    "dreams zurich interchangeable",
    "bam hamster technocratic",
    "mechatronic masterbatch",
    "bam ratchet mechatronics"
]

console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
