

function max(a, b) {
    if (a > b) return a;
    return b;
}

function Solution(W, N, w, v) {

    var mat = [];

    // js array two dimension building
    for (var j = 0; j <= W; j++) {
        mat[j] = [];
    }

    /*init matrix*/
    for (var i = 0; i < N; i++) {
        mat[i][0] = 0;
    }

    //this an optimization ???!! we deleting a not-needed row
    for (var j = 1; j <= W; j++) {
        if (w[0] > j) {
            mat[0][j] = 0;
        } else {
            mat[0][j] = v[0];
        }
    }


    for (var i = 1; i < N; i++) {
        for (var j = 0; j <= W; j++) {
            if (w[i] > j) {
                mat[i][j] = mat[i - 1][j];
            } else {
                mat[i][j] = max(v[i] + mat[i - 1][j - w[i]], mat[i - 1][j]);
            }
        }
    }

    //printing results
    //matrix
    for (var i = 0; i < N; i++) {
        for (var j = 0; j <= W; j++) {
            console.log(mat[i][j]);
        }
        console.log("\n");
    }
    var gain = mat[N - 1][W];
    console.log("\n\nthe optimal gain " + mat[N - 1][W] + " \n\n");

    //list of the selected objects
    var selectedOject = [];
    var j = W;
    for (var i = N - 1; i > 0; i--) {
        if ((mat[i][j] == 0)) {
            console.log("fin");
            break;
        }
        if ((mat[i][j] != mat[i - 1][j])) {
            selectedOject.push(i);
            console.log("object num " + (i + 1) + " has been selected \n");
            j = j - w[i];
        }
    }
    if ((mat[0][j] != 0)) {
        selectedOject.push(0);
        console.log("object num 0 has been selected \n");
    }

    return [selectedOject,gain];
}

