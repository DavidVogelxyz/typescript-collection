function twoSum(nums: number[], target: number): number[] {
    // create the hashmap
    // one way (v0.1)
    //const hashmap = new Map<number, number>();

    // new way (v0.2)
    let hashmap: {[key: number]: number } = {};

    // check to see if the value is in the map AS A DIFFERENCE
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (diff in hashmap) {
            return [hashmap[diff], i];
        }

        else {
            hashmap[nums[i]] = i;
        }
    }
};
