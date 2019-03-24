// Complete the minimumBribes function below.
function minimumBribes(q) {
    // console.log(q);
    let bribes = 0;
    for (let i = q.length -1 ; i >= 0; i--){
        //console.log(q[i], ' ', i);
        if ((q[i] - (i)) > 3) {
            console.log('Too chaotic');
            return;
        }
        console.log(i, '>', q[i]);
        for (let j = i - 1; j >= 0; j--) {
            //console.log('i: ', i, 'j :', j, ' q[j]: ', q[j], ' q[i]: ',q[i], ' bribes: ',bribes);
            if (q[j] > q[i]) bribes++;
        }
    }

    console.log();   
    console.log(bribes);
    console.log();
}
