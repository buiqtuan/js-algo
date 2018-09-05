function reverseredNumber(num = 0) {
    if (num < 10 && num > -10) {
        return num;
    }

    var isNeg = num < 0 ? true : false;

    num = isNeg ? -num : num;

    var remain = num % 10;
    var arrayDigits = [];
    do {
        arrayDigits.push(remain);
        num = Math.floor(num / 10);
        remain = num % 10;
    } while (remain !== 0);
    var reverseredNum = 0;
    arrayDigits.forEach((e,i) => {
        reverseredNum = reverseredNum + e*(Math.pow(10,(arrayDigits.length - 1 - i)));
    });

    return isNeg ? - reverseredNum : reverseredNum;
}

function charApperances(str = '') {
    str = str.toLowerCase();
    var charCounterArray = [];
    var count = 1;
    str.split('').forEach((e) => {
        if (charCounterArray.length === 0) {
            charCounterArray[count] = e;
        } else {
            let tempArray = charCounterArray;
            charCounterArray.forEach((f,i) => {
                if (f === undefined) {
                    return;
                }
                if (f.includes(e)) {
                    let regEx = new RegExp(e,'g');
                    tempArray[i] = tempArray[i].replace(regEx, '');
                    i++;
                    if (tempArray[i] === undefined) {
                        tempArray[i] = e;
                    } else {
                        tempArray[i] = tempArray[i] + e;
                    }
                }
            });
            charCounterArray = tempArray;
        }
    });

    return charCounterArray;
}

function spiralMatrix(n = 0) {
	if (n < 2) {
		return [1];
	}

	var matrix = [];

	for (let i=0;i<n;i++) {
		let subArr = [];
		for (let j=0;j<n;j++) {
			subArr.push(0);
		}
		matrix.push(subArr);
	}

	var count = 1;
	var direction = 1;
	var _x = 0;
	var _y = 0;

	while (count <= (n*n)) {
		if (direction === 1 && count <= (n*n)) {
            do {
                matrix[_x][_y] = count;
                count++;
                _y++;
                if (matrix[_x][_y] === undefined) {
                    break;
                }
            } while (matrix[_x][_y] === 0);
            _y--;
            _x++;
			direction = 2;
		}

		if (direction === 2 && count <= (n*n)) {
            do {
                matrix[_x][_y] = count;
				count++;
                _x++;
                if (matrix[_x] === undefined) {
                    break;
                }
            }
            while (matrix[_x][_y] === 0);
            _x--;
            _y--;
			direction = 3;
		}

		if (direction === 3 && count <= (n*n)) {
            do {
                matrix[_x][_y] = count;
				count++;
                _y--;
                if (matrix[_x][_y] === undefined) {
                    break;
                }
            } while (matrix[_x][_y] === 0);
            _y++;
            _x--;
			direction = 4;
		}

		if (direction === 4 && count <= (n*n)) {
            do {
                matrix[_x][_y] = count;
				count++;
                _x--;
                if (matrix[_x] === undefined) {
                    break;
                }
            } while (matrix[_x][_y] === 0);
            _x++;
            _y++;
			direction = 1;
		}
	}
	return matrix;
}

console.log(spiralMatrix(10));