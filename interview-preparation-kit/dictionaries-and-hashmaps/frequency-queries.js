//Frequency Queries

function freqQuery(queries) {
    const obj = {};
    const freq = {};
    const res = [];
    for (let q of queries) {
        const action = q[0];
        const value = q[1];
        switch (action) {
            case (1):
                if (obj[value]) {
                    freq[obj[value]] ? freq[obj[value]] -= 1 : _;
                    obj[value] += 1;
                    freq[obj[value]] ? freq[obj[value]] += 1 : freq[obj[value]] = 1;
                } else {
                    obj[value] = 1;
                    freq[obj[value]] ? freq[obj[value]] += 1 : freq[obj[value]] = 1;
                }
                break;
            case (2):
                if (obj[value] && obj[value] > 0) {
                    freq[obj[value]] ? freq[obj[value]] -= 1 : _;
                    obj[value] -= 1;
                    freq[obj[value]] ? freq[obj[value]] += 1 : freq[obj[value]] = 1;
                }
                break;
            case (3):
                freq[value] && freq[value] > 0 ? res.push(1) : res.push(0);
                break;
        }
    }
    return res;
}

function main(){
    const q = [ [ 1, 5 ],
    [ 1, 6 ],
    [ 3, 2 ],
    [ 1, 10 ],
    [ 1, 10 ],
    [ 1, 6 ],
    [ 2, 5 ],
    [ 3, 2 ] ];
    console.log(freqQuery(q)); // [0 , 1]
}

main();