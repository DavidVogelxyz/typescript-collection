function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const sCount = new Map<string, number>();

    for (const character of s) {
        sCount.set(character, (sCount.get(character) || 0) + 1);
    }

    const tCount = new Map<string, number>();

    for (const character of t) {
        tCount.set(character, (tCount.get(character) || 0) + 1);
    }

    for (const [char, count] of sCount) {
        if (tCount.get(char) !== count) {
            return false;
        }
    }

    return true;
}
