// Tal: 233

var input = 233
var heltalBase = [
    1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096
];

// Større eller mindre end 13 da der er 13 elementer
// Finder første position i arrayet og decoder nede i result
var diff = 0;
var result = "";
for (let i = 0; i <= 13; i++) {
    const pos = heltalBase[i];
    if (pos < input) {
        result = "1";
        if (diff = 0) {
            diff = input - pos;
        }
    }
    // Kalder efterfølgende diff i decode funktionen
    for (let i = 0; i <= 13; i++) {
        diff = decode(diff)
    }

    console.log(pos.toString() + " " + i.toString() + " " + result + " " + diff.toString());
}
 
function decode(val) {
    var diff = 0;
    for (let i = 0; i <= 13; i++) {
        const pos = heltalBase[i];
        if (pos < val) {
            result = result + "1";
            if (diff = 0) {
                diff = val - pos;
            }
            else {
                "0"
            }
        }
    }
    return diff
}