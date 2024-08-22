function duplicates(nums) {
    const frequencyMap = {};
    let duplicates = 0;

    nums.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });


    // Aca se recorre el map y se cuentan los elementos que tienen mas de 1 aparicion
    for (const key in frequencyMap) {
        if (frequencyMap[key] > 1) {
            duplicates++;
        }
    }

    console.log(`Hay ${duplicates} elementos repetidos`);
    return duplicates;



}

let nums = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9, 10];
duplicates(nums); 